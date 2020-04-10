const mongoose = require ('mongoose')

const Notice = mongoose.Schema({
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
    date:{
        type: Date,
        default: Date.now
    }
})

const PostSchema = mongoose.Schema({
    id:{
        type:String
    },
    firstname:{
        type:String
    },
    lastname:{
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
    desc:{
        type: String
    },
    course:{
        type: Array
    },
    pendingCourse:{
        type:Array
    },
    notice:{
        type: [Notice]
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('users', PostSchema)