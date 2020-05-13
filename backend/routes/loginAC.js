// PROGRAM – Program to create restful API and fetch data from db
// PROGRAMMER: So, Chi Fung
// CALLING SEQUENCE: return the JSX element, then call useffect. 
// VERSION 1: written 4-2-2020
// REVISION 1.1: written 4-5-2020
// PURPOSE: create restful API and fetch data from db
// DATA STRUCTURES: Json Data Type storing details
const express = require('express');
const router = express.Router();
const Post = require('../model/CreateAC')
middleware = require("../middleware")

router.post('/',middleware.loginChecker, async (req, res) => {
    const post = new Post({
        username: req.body.username,
        pw: req.body.pw,
    })
    Post.find({ username: req.body.username, pw: req.body.pw }, function (err, docs) {
        if (docs.length) {
            docs[0].pw = undefined;
            req.session.user =req.body.username
            req.session.usertype = docs[0].type
            res.json(  { 'redirectURL': '/home' })

        } else {
            console.log('no user: ');

            res.json({ error: 'no user' })
        }
    });
})









module.exports = router