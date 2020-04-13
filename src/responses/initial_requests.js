"use strict";

router.addStaticRoute('/api/me/new_player_progression', async (req, data)=>{
    let token = req.headers.authorization.split(' ')[1];
    await firebase.verifyIdToken(token);
    return JSON.stringify([]);
});

router.addStaticRoute('/api/me/decks', async (req, data)=>{
    let token = req.headers.authorization.split(' ')[1];
    await firebase.verifyIdToken(token);
    return JSON.stringify([]);
});

router.addStaticRoute('/api/me/challenges/gated', async (req, data)=>{
    let token = req.headers.authorization.split(' ')[1];
    await firebase.verifyIdToken(token);
    return JSON.stringify([]);
});

router.addStaticRoute('/api/me/crates/gift_crates', async (req, data)=>{
    let token = req.headers.authorization.split(' ')[1];
    await firebase.verifyIdToken(token);
    return JSON.stringify([]);
});

router.addStaticRoute('/api/me/shop/sales', async (req, data)=>{
    let token = req.headers.authorization.split(' ')[1];
    await firebase.verifyIdToken(token);
    return JSON.stringify([]);
});

router.addStaticRoute('/api/me/challenges/daily/completed_at', async (req, data)=>{
    let token = req.headers.authorization.split(' ')[1];
    await firebase.verifyIdToken(token);
    return JSON.stringify({});
});

router.addStaticRoute('/api/me/rank/history', async (req, data)=>{
    let token = req.headers.authorization.split(' ')[1];
    await firebase.verifyIdToken(token);
    return JSON.stringify([]);
});

router.addStaticRoute('/api/me/rank/current_ladder_position', async (req, data)=>{
    let token = req.headers.authorization.split(' ')[1];
    await firebase.verifyIdToken(token);
    return JSON.stringify({});
});