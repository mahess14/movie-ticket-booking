const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// GET /api/movies - fetch all movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// POST /api/movies - add a new movie
router.post('/', async (req, res) => {
  try {
    const { title, description, showtimes, poster,theaterName, cityName } = req.body;
    const newMovie = new Movie({ title, description, showtimes, poster,theaterName, cityName });
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(400).json({ message: 'Invalid movie data' });
  }
});

module.exports = router;
