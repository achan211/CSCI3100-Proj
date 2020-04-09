const express = require('express');
const router = express.Router();
const Attendance = require('../model/Attendance')

//get attendance by user's course (used by student)
router.get('/student', async (req, res) => {
    Attendance.find({'courseCode':req.body.courseCode}, async function (err, docs) {
        if (docs.length) {
            let username = req.body.username
            let obj=[]
            for(let i=0;i<docs.length;i++){
                obj.push({"attendanceDate": docs[i].attendanceDate, 
            "courseCode": docs[i].courseCode,
            "rate": docs[0].student[username] || null
            })
            }
            res.json(obj)
            
        } else {
            console.log('no course or wrong attendance code! ');
            res.json({ message: 'no course or wrong attendance code!  ' })
        }
    });
})

// used to take attendance by acceptinng the attendance code
router.post('/student', async (req, res) => {
    Attendance.find({'courseCode':req.body.courseCode, 'attendanceCode':req.body.attendanceCode}, async function (err, docs) {
        if (docs.length) {
            let username = req.body.username
            if(docs[0].student[username].length === docs[0].attendanceDate.length -1 ){
                let pushObj ={}
                pushObj['student.'+username] = 1
                Attendance.findOneAndUpdate(
                    { courseCode: req.body.courseCode }, 
                    {$push: pushObj},
                    {new: true},
                   function (error, success) {
                         if (error) {
                            res.json(error);
                         } else {
                            res.json(success);
                         }
                     });
            }else{
                res.json('reg alrdy!');
            }
            
        } else {
            console.log('no course or wrong attendance code! ');
            res.json({ message: 'no course or wrong attendance code!  ' })
        }
    });
})


//get attendance by course (used by prof)
router.get('/teacher', async (req, res) => {
    Attendance.find({'courseCode':req.body.courseCode}, async function (err, docs) {
        if (docs.length) {
            res.json(docs)
            
        } else {
            console.log('no course or wrong attendance code! ');
            res.json({ message: 'no course or wrong attendance code!  ' })
        }
    });
})

// used to generate a random code for attendance taking
router.post('/teacher', async (req, res) => {
    let randomcode = Math.floor(1000 + Math.random() * 9000);

     Attendance.find({'courseCode':req.body.courseCode}, async function (err, docs) {
        if (docs.length) {
            let pushObj ={}
            pushObj['attendanceCode'] = randomcode
            Attendance.findOneAndUpdate(
                { courseCode: req.body.courseCode }, 
                { $set:  {'attendanceCode' : randomcode }, $push: {'attendanceDate' : new Date()} },
                {new: true},
               function (error, success) {
                     if (error) {
                        res.json(error);
                     } else {
                        res.json(success);
                     }
                 });
        } else {
            console.log('no course  code! ');
            res.json({ message: 'no course  code!  ' })
        }
    });


})


module.exports = router