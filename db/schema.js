var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/yum");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

var Schema = mongoose.Schema;

var MovieSchema = new Schema ({
  title: String,
  time: String
})

var TheaterSchema = new Schema ({
  name: String,
  location: String,
  movies: [MovieSchema]
})

var Theater = mongoose.model("Theater", TheaterSchema);
var Movie = mongoose.model("Movie", MovieSchema);

module.exports = {
  Theater: Theater,
  Movie: Movie
};
