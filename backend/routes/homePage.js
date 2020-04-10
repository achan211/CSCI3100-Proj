const express = require('express');
const router = express.Router();
const Post = require('../model/Course')


router.post('/', async (req, res) => {
    Post.find({ code : { $in : req.body.code }  }, function (err, docs) {
        if (docs.length) {
            console.log(docs)
            res.json(   docs )
        } else {
            console.log('no  course yet! ');
            res.json({ error: 'no course yet! ' })
        }
    });


})

module.exports = router