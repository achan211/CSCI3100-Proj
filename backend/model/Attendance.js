const mongoose = require ('mongoose')

const AttendanceSchema = mongoose.Schema({
    courseCode:{
        type:String
    },
    attendanceCode:{
        type: String
    },
    attendanceDate:{
        type: Array
    },
    closeAttendance:{
        type: Boolean
    },
    student:{
        type: Object
    }
})

module.exports = mongoose.model('attendances', AttendanceSchema)