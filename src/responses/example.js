"use strict";

function testStaticResponse(url, data) {
	return example_f.testStaticResponse();
}

function testDynamicResponse(url, data) {
	return example_f.testDynamicResponse(url);
}

router.addStaticRoute("/", testStaticResponse);
router.addDynamicRoute(".png", testDynamicResponse);
router.addDynamicRoute(".ico", testDynamicResponse);