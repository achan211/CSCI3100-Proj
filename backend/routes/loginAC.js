const express = require('express');
const router = express.Router();
const Post = require('../model/CreateAC')
middleware = require("../middleware")

router.post('/', middleware.sessionChecker, async (req, res) => {
    const post = new Post({
        username: req.body.username,
        pw: req.body.pw,
    })
    Post.find({ username: req.body.username, pw: req.body.pw }, function (err, docs) {
        if (docs.length) {
            docs[0].pw = undefined;
            res.json(   docs[0] )
            // req.session.user = Math.random(25);
            // console.log(req.cookies.user_sid)
            // console.log("check pw success, gnereated cookies, now redirect to ahome")
            // res.redirect('/ahome');

        } else {
            console.log('no user: ');

            res.json({ message: 'no use' })
        }
    });


})









module.exports = router