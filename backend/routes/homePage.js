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

//get all course
router.get('/', async (req, res) => {
    Post.find({ }, function (err, docs) {
        if (docs.length) {
            console.log(docs)
            let tmp =[]
            for (let i=0;i<docs.length;i++){
                tmp.push({ 'code':docs[i].code , 'name':docs[i].name, 'username': docs[i].username, 'prof': docs[i].prof  })
            }
            res.json(   tmp )
        } else {
            console.log('no  course yet! ');
            res.json({ error: 'no course yet! ' })
        }
    });


})


module.exports = router