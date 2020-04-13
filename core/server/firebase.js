"use strict";

const firebase = require('firebase');
const admin = require('firebase-admin');

firebase.initializeApp(firebaseConfig);
admin.initializeApp({
    credential: admin.credential.cert(firebaseServiceKey),
    databaseURL: firebaseConfig.databaseURL
});

function signInWithEmailAndPassword(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
}

function verifyIdToken(token) {
    return admin.auth().verifyIdToken(token);
}

exports.signInWithEmailAndPassword = signInWithEmailAndPassword;
exports.verifyIdToken = verifyIdToken;