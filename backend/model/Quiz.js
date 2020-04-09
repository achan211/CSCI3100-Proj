const mongoose = require ('mongoose')

const QuizeQSchema = mongoose.Schema({
    question:{
        type: Array
    },
    ans:{
        type:Array
    },
    number:{
        type: String
    },
    score:{
        type: Object
    }
})

const QuizeSchema = mongoose.Schema({
    courseCode:{
        type:String
    },
    quiz:{
        type: Array
    },
})

module.exports = mongoose.model('quizs', QuizeSchema)