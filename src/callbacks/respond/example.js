"use strict";

function sendImage(req, resp, body) {
    let splittedUrl = req.url.split('/');
    let fileName = splittedUrl[splittedUrl.length - 1].split('.').slice(0, -1).join('.');

    server.sendFile(resp, res.test[fileName]);
}

server.addRespondCallback("IMAGE", sendImage);