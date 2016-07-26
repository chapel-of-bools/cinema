var mongoose = require("mongoose");

var TheaterSchema = new mongoose.Schema(
  {
    name: String,
    location: String
  }
);

mongoose.model("Theater", TheaterSchema);
if(process.env.NODE_ENV == "production"){
  mongoose.connect(process.env.MONGOLAB_URL);
} else {
  mongoose.connect("mongodb://localhost/cinema");
}
module.exports = mongoose;
