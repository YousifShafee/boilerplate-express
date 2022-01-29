var express = require('express');
var app = express();
console.log("Hello World");
const hand = function(req, res){
    req.send("Hello Express")
}
app.get('/', hand)


































 module.exports = app;
