// PROGRAM – Program to create db model
// PROGRAMMER: So, Chi Fung
// CALLING SEQUENCE: return the JSX element, then call useffect. 
// VERSION 1: written 4-2-2020
// REVISION 1.1: written 4-5-2020
// PURPOSE: create db model
// DATA STRUCTURES: Json Data Type storing details

const mongoose = require('mongoose')

const Topic = mongoose.Schema({
    topic: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    page: {
        type: String,
        default: "1"
    },
    lauzhu: {
        type: String,
    },
    context:{
        type:String
    }
})

const ForumSchema = mongoose.Schema({
    id: {
        type: String
    },
    code: {
        type: String
    },
    topic: {
        type: [Topic]
    }
})

module.exports = mongoose.model('forums', ForumSchema)