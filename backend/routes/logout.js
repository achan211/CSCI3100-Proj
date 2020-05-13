// PROGRAM – Program to create restful API and fetch data from db
// PROGRAMMER: So, Chi Fung
// CALLING SEQUENCE: return the JSX element, then call useffect. 
// VERSION 1: written 4-2-2020
// REVISION 1.1: written 4-5-2020
// PURPOSE: create restful API and fetch data from db
// DATA STRUCTURES: Json Data Type storing details
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.clearCookie('user_sid');
        res.json(  { 'redirectURL': '/login'})
    } else {
        console.log('logout error occured')
        res.json(  { 'redirectURL': '/login'})

    }
});
module.exports = router
