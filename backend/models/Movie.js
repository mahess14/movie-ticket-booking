const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  showtimes: [String], // e.g. ["10:00 AM", "1:00 PM"]
  poster: String,
  theaterName: String,
  cityName:String,
},
   {timestamps: true ,
});

module.exports = mongoose.model('Movie', movieSchema);



