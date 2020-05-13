// PROGRAM – Program to create db model
// PROGRAMMER: So, Chi Fung
// CALLING SEQUENCE: return the JSX element, then call useffect. 
// VERSION 1: written 4-2-2020
// REVISION 1.1: written 4-5-2020
// PURPOSE: create db model
// DATA STRUCTURES: Json Data Type storing details

const mongoose = require ('mongoose')

const sitNotice = mongoose.Schema({
    type:{
        type:String
    },
    course:{
        type:String
    },
    message:{
        type:String
    },
    studentUsername:{
        type:String
    },
    status:{
        type:String
    },
    date:{
        type: Date,
        default: Date.now
    }
})

const forumNotice =  mongoose.Schema({
    type:{
        type:String
    },
    course:{
        type:String
    },
    message:{
        type:String
    },
    studentUsername:{
        type:String
    },
    link:{
        type:String
    },
    date:{
        type: Date,
        default: Date.now
    }
})

const PostSchema = mongoose.Schema({
    id:{
        type:String
    },
    pic:{
        type:String
    },
    firstname:{
        type:String
    },
    lastname:{
        type: String
    },
    intro:{
        type: String
    },
    major:{
        type: String
    },
    minor:{
        type: String
    },
    username:{
        type: String
    },
    email:{
        type: String
    },
    pw:{
        type: String
    },
    type:{
        type: String,
        default: 'student'
    },
    desc:{
        type: String
    },
    course:{
        type: Array
    },
    pendingCourse:{
        type:Array
    },
    sitNotice:{
        type: [sitNotice]
    },
    forumNotice:{
        type: [forumNotice]
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('users', PostSchema)