const express = require('express');
const router = express.Router();
const Post = require('../model/ForumPage')

// get the forum topic
router.get('/', async (req, res) => {
    Post.find({ code : { $in : req.body.code }  }, function (err, docs) {
        if (docs.length) {
            console.log(docs)
            res.json(   docs[0] )
        } else {
            console.log('no such forum! ');
            res.json({ message: 'no such forum! ' })
        }
    });

})


// To add a fourm topic to the server
router.post('/', async (req, res) => {
    let code = req.body.code 
    let topic = req.body.topic 
    Post.find({'code':code}, async function (err, docs) {
        if (docs.length) {
            let pushObj={
                topic: topic, 
            }
            Post.findOneAndUpdate(
                { code: req.body.code }, 
                {$push: { topic: pushObj }},
                {new: true},
               function (error, success) {
                     if (error) {
                        res.json(error);
                     } else {
                       let length= success.topic.length
                       
                        res.json(success.topic[length-1]);
                     }
                 });
        } else {
            console.log('no course  code! ');
            res.json({ message: 'no course  code!  ' })
        }
    });


})

module.exports = router