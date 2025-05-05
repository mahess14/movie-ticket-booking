const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
  movieTitle: String,
  theaterName: String,
  cityName: String,
  showtime: String,
  seats: [String],
  userName: String,
  totalCost: Number,
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
