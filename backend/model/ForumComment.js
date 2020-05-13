// PROGRAM – Program to create db model
// PROGRAMMER: So, Chi Fung
// CALLING SEQUENCE: return the JSX element, then call useffect. 
// VERSION 1: written 4-2-2020
// REVISION 1.1: written 4-5-2020
// PURPOSE: create db model
// DATA STRUCTURES: Json Data Type storing details

const mongoose = require ('mongoose')


const ForumComments = mongoose.Schema({
    code: {
        type: String
    },
    comment:{
        type: Object
    }

})

module.exports = mongoose.model('forumcomments', ForumComments)