const express = require('express');
const router = express.Router();
const ForumComment = require('../model/ForumComment')


// get the forum topic's comments
router.get('/', async (req, res) => {


    // let tmp ={}
    // tmp.code = req.body.code
    // tmp[req.body.forumTopicId] = req.body.forumTopicId
    // console.log(tmp)
    
    let id = req.body.id 
    let code = req.body.code 
    let obj ={
        'code':code
    }
    obj['comment.'+id]  = {"$exists":true}

    ForumComment.find(obj, function (err, docs) {
        if (docs.length) {
            console.log(docs[0])
            res.json(   docs[0].comment[req.body.id] )
        } else {
            console.log('no such commnet yet! ');
            res.json({ message: 'no such commnet yet! ' })
        }
    });

})


// To add a comment to the forum topic to the server
router.post('/', async (req, res) => {
    let code = req.body.code 
    let id = req.body.id 
    let text = req.body.text 
    let obj ={
        'code':code
    }
    // obj['comment.'+id]  = {"$exists":true}
    ForumComment.find(obj, async function (err, docs) {
        if (docs.length) {
            let pushObj={
               
            }
            pushObj['comment.'+id]  = text

            ForumComment.findOneAndUpdate(
                { code: req.body.code }, 
                {$push:  pushObj },
                {new: true},
               function (error, success) {
                     if (error) {
                        res.json(error);
                     } else {
                    //    let length= success.topic.length
                       res.json(success)
                        // res.json(success.topic[length-1]);
                     }
                 });
        } else {
            console.log('no course  code! ');
            res.json({ message: 'no course  code!  ' })
        }
    });


})

module.exports = router