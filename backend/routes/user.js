const express = require('express');
const router = express.Router();
const Post = require('../model/CreateAC')
const Course = require('../model/Course')

//edit user details (except username)
router.post('/edit', async (req, res) => {
    let username = req.body.username //type: string
    let obj = {}
    obj[req.body.type] = req.body.value
    Post.findOneAndUpdate(
        { username: username },
        { $set: obj },
        { new: true },
        function (error, success) {
            if (error) {
                res.json(error);
            } else {
                res.json(success);
            }
        });

});

//get notificaiton 
router.get('/getNotification/:username', async (req,res)=>{
    let username = req.params.username;
    Post.find({'username': username}, async function (err,docs){
        if(docs.length){
            res.json(docs[0].notice);
        }
        else
        res.json({error: 'no updates'})
    })
})

//request to enroll for a course 
router.post('/requestAddCourse', async (req, res) => {
    let studentUsername = req.body.studentusername //type: string
    let course = req.body.code
    let message = req.body.message

    Course.find({ 'code': course }, async function (err, docs) {
        if (docs.length) {
            let prof = docs[0].username

            Post.find({ username: studentUsername }, async function (err, docs) {
                if (docs.length) {
                    let filtered = docs[0].pendingCourse.filter(i => {
                        return i === course
                    })
                    if(filtered.length !== 0 ){
                        console.log('you have already requested! ');
                        res.json({ error: 'You have already requested! ' })
                    }
                    else{
                        filtered = docs[0].course.filter(i => {
                            return i === course
                        })
                        if (filtered.length === 0) {
                            // update prof ac
                            Post.findOneAndUpdate(
                                { username: prof },
                                {
                                    $push: {
                                        notice: {
                                            type: 'Sit in Course Request',
                                            course: course,
                                            studentUsername: studentUsername,
                                            message: message
                                        }
                                    }
                                },
                                { new: true },
                                function (error, success) {
                                    // if (error) {
                                    //     res.json(error);
                                    // } else {
                                    //     res.json(success);
                                    // }
                                });
                            // update student ac
                            Post.findOneAndUpdate(
                                { username: studentUsername },
                                {
                                    $push: {
                                        pendingCourse: course
                                    }
                                },
                                { new: true },
                                function (error, success) {
                                    if (error) {
                                        res.json(error);
                                    } else {
                                        res.json({message: 'Success!'});
                                    }
                                });
                        } else{
                            console.log('you have already enrolled! ');
                            res.json({ error: 'You have already enrolled! ' })
                        }


                    }
                    
             
                } else {
                    console.log('no such studnet ');
                    res.json({ error: 'no such student !  ' })
                }
            })


        } else {
            console.log('no course  code! ');
            res.json({ error: 'no course  code!  ' })
        }
    });
});

//add enrolled course for user (has to be done by teacher)
router.post('/addEnrolledCourse', async (req, res) => {
    let username = req.body.username //type: string
    let course = req.body.course

    Post.find({ 'username': username }, async function (err, docs) {
        if (docs.length) {
            let filtered = docs[0].course.filter(i => {
                return i === course
            })
            if (filtered.length === 0) {
                Post.findOneAndUpdate(
                    { username: username },
                    { $push: { course: course } },
                    { new: true },
                    function (error, success) {
                        if (error) {
                            res.json(error);
                        } else {
                            res.json(success);
                        }
                    });
            } else {
                res.json({ message: 'already enrolled!' })
            }

        } else {
            console.log('no course  code! ');
            res.json({ message: 'no course  code!  ' })
        }
    });
});

module.exports = router