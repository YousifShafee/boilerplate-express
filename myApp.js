var express = require('express');
var app = express();
console.log("Hello World");

function mware(req, res, next) {
  console.log(req.method + " " + req.path + ' - ' + req.ip)
  next()
}
app.use(mware)

const hand = function(req, res){
    let path = __dirname + "/views/index.html";
    res.sendFile(path);
}

app.use('/public', express.static(__dirname + "/public"))

console.log(app.get('/', hand))

const json_fun = function(req, res){
  if(process.env.MESSAGE_STYLE == 'uppercase'){
    res.json({"message": "Hello json".toUpperCase()})
  }
  else{
    res.json({"message": "Hello json"})
  }  
}
console.log(app.get('/json', json_fun))

var now_midl = (req, res, next) => {
  req.time = new Date().toString()
  next()
}
var now_fun = (req, res) => {
  res.json({'time': req.time})
}
console.log(app.get('/now', now_midl, now_fun))

var echo_fun = (req, res) => {
  var {word} = req.params
  res.json({echo: word})
}
console.log(app.get('/:word/echo', echo_fun))

var name_fun = (req, res) => {
  var {first, last} = req.query;
  res.json({name: first + ' ' + last})
}
console.log(app.route('/name').get(name_fun).post(name_fun))

module.exports = app;
