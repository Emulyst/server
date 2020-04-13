"use strict";

router.addStaticRoute('/accounts/me/platinums', async (req, data)=>{
    let token = req.headers.authorization.split(' ')[1];
    await firebase.verifyIdToken(token);
    return JSON.stringify({
        status: "success",
        data: {
            total_platinum: 0
        }
    });
});