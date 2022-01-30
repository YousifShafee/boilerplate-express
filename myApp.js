var express = require('express');
var app = express();
console.log("Hello World");
const hand = function(req, res){
    let path = __dirname + "/views/index.html";
    res.sendFile(path);
}
console.log(app.get('/', hand))































 module.exports = app;
