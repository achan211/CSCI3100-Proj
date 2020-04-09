const mongoose = require ('mongoose')

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
        type: Array
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('courses', CourseSchema)