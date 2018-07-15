var express = require("express");
var request = require("request");

var app = express();

app.get("/results", function(req, res){
  res.send("hello it works!")
});

app.listen(3000, function(){
  console.log("Movie app has stearted!!!");
});
