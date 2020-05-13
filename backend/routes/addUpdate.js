// PROGRAM – Program to create restful API and fetch data from db
// PROGRAMMER: So, Chi Fung
// CALLING SEQUENCE: return the JSX element, then call useffect. 
// VERSION 1: written 4-2-2020
// REVISION 1.1: written 4-5-2020
// PURPOSE: create restful API and fetch data from db
// DATA STRUCTURES: Json Data Type storing details

const Course = require('../model/Course')
const express = require('express');
const router = express.Router();
middleware = require("../middleware")


router.post('/updates/postUpdates',middleware.sessionChecker, async (req, res) => {
    let updates = {}
    updates = {
        course: req.body.course,
        type: req.body.messagetype,
        message: req.body.message
    }
    Course.findOneAndUpdate(
        { 'code': req.body.course },
        { $push: { updates: updates } },
        { new: true, },
        function (error, success) {
            if (error) {
                res.json({error: 'error occured'});
            } else {
                res.json({docs:success});
            }
        });
})


module.exports = router
