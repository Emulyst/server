"use strict";

function testStaticResponse() {
    logger.logInfo("hello reply!");
    return json.read(db.test.example);
}

function testDynamicResponse(url) {
    logger.logInfo("hello " + url + "!");
    return "IMAGE";
}

function testStartCallback() {
    logger.logInfo("hello start!");
}

function testReceiveCallback() {
    logger.logInfo("hello receive!");
}

function testRespondCallback() {
    logger.logInfo("hello response!");
}

module.exports.testStaticResponse = testStaticResponse;
module.exports.testDynamicResponse = testDynamicResponse;
module.exports.testStartCallback = testStartCallback;
module.exports.testReceiveCallback = testReceiveCallback;
module.exports.testRespondCallback = testRespondCallback;