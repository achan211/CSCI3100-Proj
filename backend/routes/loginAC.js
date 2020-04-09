const express = require('express');
const router = express.Router();
const Post = require('../model/CreateAC')


router.post('/', async (req, res) => {
    const post = new Post({
        username: req.body.username,
        pw: req.body.pw,
    })
    Post.find({ username: req.body.username , pw: req.body.pw }, function (err, docs) {
        if (docs.length) {
            res.json(   docs[0] )
        } else {
            console.log('no user: ');
            res.json({ message: 'no use' }) 
        }
    });


})

module.exports = router