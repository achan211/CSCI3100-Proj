
var express = require('express');
var app = express();
var cors = require('cors');
var port = 5000
app.use(cors());

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.listen(port, function () {
  console.log('Example app listening on port 5000!');
});

let demodata =  { 'firstname': 'chan',
'lastname': 'Peter',
'username': 'Peter123',
'email': 'Peter123@gmail.com',
'pw': '123',
'id': '123456' }



app.get('/', (req, res) => {
  const test ="he"
  res.json(test);
});

app.post('/login', (req, res) => {
  const info = req.body;
  console.log(info)
  if (info.username === demodata.username && info.pw === demodata.pw)
  res.json({'status':'success', 'token': demodata.id});
  else
  res.json({'status':'error'});


  
});

app.post('/signUp', (req, res) => {
  const info = req.body;
  console.log(info);

  res.json(info);
});

