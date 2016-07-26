var mongoose = require("mongoose");
var Schema = require("../db/schema.js");
var Theater = Schema.Theater;
var Movie = Schema.Movie;

var theatersController = {
  index: function(){
    Theater.find({}, function(err, theaters){
      if(err){
        console.log(err);
      } else {
        console.log(theaters);
      }
    })
  },
  show: function(req){
    Theater.findOne({"name": req.name}, function(err, theater){
      if(err){
        console.log(err);
      } else {
        console.log(theater);
      }
    })
  },
  update: function(req, update){
    Theater.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true}).then(function(restaurant){
      console.log(restaurant);
    })
  },
  destroy: function(req){
    Theater.findOneAndRemove(req, function(theater){
      console.log(theater);
    })
  }
}
