"use strict";

router.addStaticRoute('/api/me/rank', async (req, data)=>{
    if (req.method === "POST") {
        let token = req.headers.authorization.split(' ')[1];
        await firebase.verifyIdToken(token);
        throw {code: 304, message: "NO CHANGE"};
    }
});