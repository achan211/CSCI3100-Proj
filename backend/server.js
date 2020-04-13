
var express = require('express');
var app = express();
const mongoose = require("mongoose")
require('dotenv/config')
var cors = require('cors');
var port = 5000
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
var session = require("express-session");
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser');
var middleware =require('./middleware')
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
// app.use(middleware.sessionChecker);

var multer = require('multer')
//import routes
const createAC = require('./routes/createAC')
const loginAC = require('./routes/loginAC')
const homePage = require('./routes/homePage')
const forumPage = require('./routes/forumPage')
const attendance = require('./routes/attendance')
const quiz = require('./routes/quiz')
const forumComments = require('./routes/forumComments')
const user = require('./routes/user')
const uploadPropic = require('./routes/uploadPropic')
const rating = require('./routes/rating')
const addUpdate = require('./routes/addUpdate')
const admin = require('./routes/admin')






app.use(cookieParser());
app.use(session({
  key: 'user_sid',
  secret: 'somerandonstuffs',
  resave: false,
  saveUninitialized: false,
  cookie: {
    // expires: 600000,
    httpOnly: false,
    secure: false,
  }
}));




// app.use((req, res, next) => {
//   if (req.cookies.user_sid && !req.session.user) {
//     res.clearCookie('user_sid');
//   }
//   next();
// });

// sessionChecker1 = (req, res, next) => {
//   if (req.session.user && req.cookies.user_sid) {
//     console.log(req.session.user)
//     console.log('has cookirse!')
//    next();

//   } else {
//    console.log("no cookies")
//    res.redirect('/alogin');
// };
// }


// app.get('/ahome',sessionChecker1, (req, res) => {
//  console.log("hello")
//  res.json('hello')
// });

// app.route('/alogin')
//   .get(( req, res) => {
//     // var username = req.body.username
//     // var password = req.body.password;
//     req.session.user ='test'
//     res.redirect('/ahome')
//   }); 

app.use('/createAC', createAC)
app.use('/login', loginAC)
app.use('/', homePage)
app.use('/', addUpdate)
app.use('/forum', forumPage)
app.use('/attendance', attendance)
app.use('/quiz', quiz)
app.use("/forumComments", forumComments)
app.use("/user", user)
app.use("/", rating)
app.use('/',uploadPropic)
app.use('/admin',admin)






app.listen(port, function () {
  console.log('Example app listening on port 5000!');
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log("connected to DB!")
})


