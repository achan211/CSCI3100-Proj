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
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('courses', CourseSchema)