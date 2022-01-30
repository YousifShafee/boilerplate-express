var express = require('express');
var app = express();
console.log("Hello World");
const hand = function(req, res){
    let path = __dirname + "/views/index.html";
    res.sendFile(path);
}
app.use('/public', express.static(__dirname + "/public"))
console.log(app.get('/', hand))































 module.exports = app;
