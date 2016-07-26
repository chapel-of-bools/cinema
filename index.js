var express = require("express");
var parser = require("body-parser");
var hbs = require("express-handlebars");
var mongoose = require("./db/connection");
var app = express();

var Theater = mongoose.model("Theater");

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname: ".hbs",
  partialsDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout-main"
}));

app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.render("app-welcome");
});

app.get("/theaters", function(req, res){
  Theater.find({}).then(function(theaters){
    res.render("theaters-index", {
      theaters: theaters
    });
  });
});

app.get("/theaters/:name", function(req, res){
  Theater.findOne({name: req.params.name}).then(function(theater){
    res.render("theaters-show", {
      theater: theater
    });
  });
});
app.post("/theaters", function(req, res) {

  Theater.create(req.body.theater).then(function(theater){
    res.redirect("/theaters/" + theater.name);
  });
});

app.post("/theaters/:name/delete", function(req, res) {
  Theater.findOneAndRemove({name: req.params.name}).then(function() {
    res.redirect("/theaters")
  });
});


app.post("/theaters/:name", function(req, res) {
  Theater.findOneAndUpdate({name: req.params.name}, req.body.theater, {new: true}).then(function(theater) {
    res.redirect("/theaters/" + theater.name);
  });
});

app.listen(3001, function(){
  console.log("It's aliiive!!!");
});
