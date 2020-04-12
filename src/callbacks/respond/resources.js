"use strict";

function sendImage(req, resp, body) {
    server.sendFile(resp, "res" + req.url);
}

server.addRespondCallback("IMAGE", sendImage);