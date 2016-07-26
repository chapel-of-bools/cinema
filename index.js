var express = require("express");
var hbs = require("express-handlebars");
var mongoose = require("mongoose");
var Schema = require("./db/schema.js");
var app = express();

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname: ".hbs",
  partialsDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout-main"
}));

app.use("/assets", express.static("public"));

app.get("/", function(req, res){
  res.render("app-welcome");
});

app.get("/theaters", function(req, res){
  res.render("theaters-index", {
    numTheaters: 666
  });
});

app.listen(3001, function(){
  console.log("It's aliiive!!!");
});
