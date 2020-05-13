// PROGRAM – Program to create db model
// PROGRAMMER: So, Chi Fung
// CALLING SEQUENCE: return the JSX element, then call useffect. 
// VERSION 1: written 4-2-2020
// REVISION 1.1: written 4-5-2020
// PURPOSE: create db model
// DATA STRUCTURES: Json Data Type storing details

const mongoose = require ('mongoose')

const updates =  mongoose.Schema({
    type:{
        type:String
    },
    course:{
        type:String
    },
    message:{
        type:String
    },
    date:{
        type: Date,
        default: Date.now
    }
})
const LecTut=mongoose.Schema({
    name:{
        type:String
    },
    link:{
        type:String
    }
})
const Asg=mongoose.Schema({
    name:{
        type:String
    },
    deadline:{
        type:String
    },
    link:{
        type:String
    }
})
const materials=mongoose.Schema({
    LectureNotes:{
        type:[LecTut]
    },
    Assignment:{
        type:[Asg]
    },
    Tutorial:{
        type:[LecTut]
    }
})
const CourseSchema = mongoose.Schema({
    id:{
        type:String
    },
    code:{
        type:String
    },
    name:{
        type: String
    },
    prof:{
        type: String
    },
    username:{
        type: String
    },
    department:{
        type: String
    },
    updates:{
        type: [updates]
    },
    materials:{
        type : {materials}
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('courses', CourseSchema)