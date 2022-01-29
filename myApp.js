var express = require('express');
var app = express();
console.log("Hello World");
const hand = function(req, res){
    res.send("Hello Express")
}
app.get('/', hand)


































 module.exports = app;
