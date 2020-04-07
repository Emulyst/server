"use strict";

const fs = require('fs');
const https = require('https');
const selfsigned = require('selfsigned');

class Server {
    constructor() {
        this.buffers = {};
        this.startCallback = {};
        this.receiveCallback = {};
        this.respondCallback = {};
        this.name = serverConfig.name;
        this.ip = serverConfig.ip;
        this.port = serverConfig.port;
        this.backendUrl = "https://" + this.ip + ":" + this.port;
        this.version = "0.0.1";
        this.mime = {
            gif: 'image/gif',
            jpg: 'image/jpeg',
            png: 'image/png',
            json: 'application/json'
        };
    }

    addStartCallback(type, worker) {
        this.startCallback[type] = worker;
    }

    addReceiveCallback(type, worker) {
        this.receiveCallback[type] = worker;
    }

    addRespondCallback(type, worker) {
        this.respondCallback[type] = worker;
    }

    generateCertifcate() {
        let perms = selfsigned.generate([{ name: 'commonName', value: this.ip + "/" }], { days: 365 });
        return {cert: perms.cert, key: perms.private};
    }
    
    sendJson(resp, output) {
        resp.writeHead(200, "OK", {'Content-Type': this.mime['json']});
        resp.end(output);
    }

    sendFile(resp, file) {
        let pathSlic = file.split("/");
        let type = this.mime[pathSlic[pathSlic.length -1].split(".")[1]];
        let fileStream = fs.createReadStream(file);
    
        fileStream.on('open', function () {
            resp.setHeader('Content-Type', type);
            fileStream.pipe(resp);
        });
    }

    sendResponse(req, resp, data) {
        let output = "";
    
        // get response
        if (req.method === "GET") {
            output = router.getResponse(req, "");
        } else {
            output = router.getResponse(req, data);
        }

        // execute data received callback
        for (let type in this.receiveCallback) {
            this.receiveCallback[type](req, resp, data, output);
        }

        // send response
        if (output in this.respondCallback) {
            this.respondCallback[output](req, resp, data);
        } else {
            this.sendJson(resp, output);
        }
    }

    handleRequest(req, resp) {
        const IP = req.connection.remoteAddress.replace("::ffff:", "");
        logger.logRequest("[" + IP + "] " + req.url);
    
        // request without data
        if (req.method === "GET") {
            server.sendResponse(req, resp, "");
        }
    
        // request with data
        if (req.method === "POST") {
            req.on('data', function(data) {
                let body = (data !== typeof "undefined" && data !== null && data !== "") ? body : {};
                server.sendResponse(req, resp, body);
            });
        }
    
        if (req.method === "PUT") {
            req.on('data', function(data) {
                let body = (data !== typeof "undefined" && data !== null && data !== "") ? body : {};
                server.sendResponse(req, resp, body);
            });
        }
    }

    start() {    
        // execute start callback
        logger.logWarning("Server: executing startup callbacks...");

        for (let type in this.startCallback) {
            this.startCallback[type]();
        }

        /* create server */
        let httpsServer = https.createServer(this.generateCertifcate(), (req, res) => {
            this.handleRequest(req, res);
        }).listen(this.port, this.ip, function() {
            logger.logSuccess("Started server");
        });

        /* server is already running */
        httpsServer.on('error', function(e) {
            logger.logError("» Port " + e.port + " is already in use, check if the server isn't already running");
        });
    }
}

module.exports.server = new Server();