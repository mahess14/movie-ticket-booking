import './MovieList.css'; // Add this import
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/movies')
      .then(res => setMovies(res.data));
  }, []);

  return (
    <div className='moviel'>
    <div className="movie-list">
      <h1>Movies</h1>
      {movies.map(movie => (
        <Link key={movie._id} to={`/movie/${movie._id}`} className="movie-card">
          <img src={movie.poster} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p><strong>Theater:</strong> {movie.theaterName}</p>
          <p><strong>City:</strong> {movie.cityName}</p>
         
        </Link>
      ))}
    </div>
    </div>
  );
}

export default MovieList;
