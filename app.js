let express = require("express");
let request = require("request");

let app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));


app.get("/episodes", (req, res) => {

  request("https://gist.githubusercontent.com/thekiwi/ab70294c8d7ab790d9b6d70df9d3d145/raw/14513c7b841b37b2406dda4d3b9143a25700a68e/silicon-valley.json", (error, response, body) => {
    if(!error && response.statusCode === 200 ){
      let data = JSON.parse(body);
      res.render("episodes", { data: data});
    }
  });
});

app.listen(3000, () => {
  console.log("Movie app has stearted!!!");
});

module.exports = app;
