"use strict";

function sendImage(req, data) {
    return "IMAGE";
}

router.addDynamicRoute(".gif", sendImage);
router.addDynamicRoute(".ico", sendImage);
router.addDynamicRoute(".jpg", sendImage);
router.addDynamicRoute(".png", sendImage);