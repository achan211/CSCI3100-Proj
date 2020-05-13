// PROGRAM – Program to create db model
// PROGRAMMER: So, Chi Fung
// CALLING SEQUENCE: return the JSX element, then call useffect. 
// VERSION 1: written 4-2-2020
// REVISION 1.1: written 4-5-2020
// PURPOSE: create db model
// DATA STRUCTURES: Json Data Type storing details

const mongoose = require('mongoose')

const StudentRating = mongoose.Schema({
    username: {
        type: String
    },
    ratingScore: {
        type: Number
    }
})
const RatingDate = mongoose.Schema({
    date:{
        type: Date,
        default: Date.now
    },
    studentRating:{
        type: Object
    }
})


const RatingSchema = mongoose.Schema({
    code: {
        type: String
    },
    mode:{
        type: Number,
        default: 0
    },
    date:{
        type: Date,
        default: Date.now
    },
    rating: {
        type: Object
    }
})

module.exports = mongoose.model('courseratings', RatingSchema)