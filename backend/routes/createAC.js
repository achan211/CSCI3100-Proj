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


router.post('/', async (req, res) => {
    const post = new Post({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        pw: req.body.pw,
    })
    Post.find({ $or:[ {'email':req.body.email}, {'username':req.body.username}]}, async function (err, docs) {
        if (!docs.length) {
            try {
                const savedPost = await post.save();
                res.json(savedPost)
            } catch (err) {
                res.json({ message: err })
            }
        } else {
            console.log('user exists: ');
            res.json({ message: 'user exists: ' })
        }
    });


})

module.exports = router