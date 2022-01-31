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







 module.exports = app;
