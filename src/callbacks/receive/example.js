"use strict";

function testReceiveCallback(req, resp, data, outpu) {
	example_f.testReceiveCallback();
}

server.addReceiveCallback("test", testReceiveCallback);