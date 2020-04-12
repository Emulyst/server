"use strict";

const firebase = require('firebase');
const serviceKey = require('../serviceAccountKey.json');

firebase.initializeApp(firebaseConfig);

router.addStaticRoute("/session/bnea_login", async (url, data)=>{
    let credentials = json.fromBuffer(data);
    let {user} = await firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password);
    return json.stringify({token: await user.getIdToken()});
});