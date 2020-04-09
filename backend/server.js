
var express = require('express');
var app = express();
const mongoose = require("mongoose")
require('dotenv/config')
var cors = require('cors');
var port = 5000
app.use(cors());

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies



//import routes
const createAC = require('./routes/createAC')
const loginAC = require('./routes/loginAC')
const homePage = require('./routes/homePage')
const forumPage = require('./routes/forumPage')
const attendance = require('./routes/attendance')
const quiz = require('./routes/quiz')
const forumComments = require('./routes/forumComments')
const user = require('./routes/user')








app.use('/createAC', createAC)
app.use('/login', loginAC)
app.use('/', homePage)

app.use('/forum', forumPage) 
app.use('/attendance', attendance) 
app.use('/quiz', quiz) 
app.use("/forumComments",forumComments)
app.use("/user",user)







app.listen(port, function () { 
  console.log('Example app listening on port 5000!');
});

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true,useUnifiedTopology: true }, ()=>{
  console.log("connected to DB!")
})

