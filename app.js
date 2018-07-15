var express = require("express");
var request = require("request");

var app = express();

app.get("/results", (req, res) => {
  request("https://gist.githubusercontent.com/thekiwi/ab70294c8d7ab790d9b6d70df9d3d145/raw/14513c7b841b37b2406dda4d3b9143a25700a68e/silicon-valley.json", (error, response, body) => {
    if(!error && response.statusCode === 200 ){
      var data = JSON.parse(body);
      res.send(data["name"])
      // res.render("results", { data: data})
    }
  })
});

app.listen(3000, function(){
  console.log("Movie app has stearted!!!");
});
