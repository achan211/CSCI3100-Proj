const express = require('express');
const router = express.Router();
const Post = require('../model/Course')


router.get('/', async (req, res) => {
    Post.find({ code : { $in : req.body.code }  }, function (err, docs) {
        if (docs.length) {
            console.log(docs)
            res.json(   docs )
        } else {
            console.log('no such course! ');
            res.json({ message: 'no such course! ' })
        }
    });


})

module.exports = router