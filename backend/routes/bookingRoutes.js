const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Movie = require('../models/Movie');

// POST /api/bookings
router.post('/', async (req, res) => {
  try {
    const { movieId, showtime, seats, userName, totalCost } = req.body;

    const movie = await Movie.findById(movieId);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });

    const newBooking = new Booking({
      movieId,
      movieTitle: movie.title,
      theaterName: movie.theaterName,
      cityName: movie.cityName,
      showtime,
      seats,
      userName,
      totalCost,
    });

    await newBooking.save();
    res.status(201).json({ message: 'Booking successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Booking failed', error: err.message });
  }
});

// GET /api/bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Failed to load bookings', error: err.message });
  }
});

module.exports = router;
