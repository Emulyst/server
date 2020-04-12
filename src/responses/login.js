"use strict";

const firebase = require('firebase');
const serviceKey = require('../serviceAccountKey.json');

firebase.initializeApp(firebaseConfig);

admin.auth().getUserByEmail("test@test.com").then(user => {
    admin.auth().setCustomUserClaims(user.uid, {username: "Testing123", id: "testuser"}); 
});

router.addStaticRoute("/session/bnea_login", async (url, data)=>{
    let credentials = json.fromBuffer(data);
    let {user} = await firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password);
    return json.stringify({token: await user.getIdToken()});
});