var mongoose = require("mongoose");
var Schema = require("./schema.js");
var Theater = Schema.Theater;
var Movie = Schema.Movie;

Theater.remove({}, function(err){
  if(err){
    console.log(err);
  }
})

Movie.remove({}, function(err){
  if(err){
    console.log(err);
  }
})

var amc = new Theater({name: "AMC", location: "Washington, DC"})

var movie1 = new Movie({title: "Reservoir Dogs"})
var movie2 = new Movie({title: "Fight Club"})
var movie3 = new Movie({title: "Evil Dead II: Dead By Dawn"})
var movie4 = new Movie({title: "Halloween"})

var theaters = [amc];
var movies = [movie1, movie2, movie3, movie4];

for(var i=0; i < theaters.length; i++){
  theaters[i].movies.push(items[i])
  theaters[i].save(function(err, theater){
    if(err){
      console.log(err)
    } else {
      console.log(theater)
    }
  })
};
