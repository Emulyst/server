"use strict";

function testStartCallback() {
	example_f.testStartCallback();
}

server.addStartCallback("test", testStartCallback);