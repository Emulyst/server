"use strict";

router.addStaticRoute("/session/bnea_login", async (req, data)=>{
    let credentials = json.fromBuffer(data);
    let {user} = await firebase.signInWithEmailAndPassword(credentials.email, credentials.password);
    let idToken = await user.getIdToken();
    return json.stringify({token: idToken, bnea_token: idToken, bnea_refresh: user.refreshToken});
});