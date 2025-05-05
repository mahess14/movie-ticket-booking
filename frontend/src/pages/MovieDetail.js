import './MovieDetail.css';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/movies`)
      .then(res => {
        const found = res.data.find(m => m._id === id);
        setMovie(found);
      });
  }, [id]);

  const handleBookClick = (showtime) => {
    navigate(`/booking/${id}?showtime=${encodeURIComponent(showtime)}`);
  };

  if (!movie) return <p>Loading...</p>;
  

  return (
    <div className='movied'>
    <div className="movie-detail-container">
      <div className="movie-info">
        <img src={movie.poster} alt={movie.title} className="movie-poster" />
        <div className="movie-details">
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
         
          <p><strong>Theater:</strong> {movie.theaterName}</p>
          <p><strong>City:</strong> {movie.cityName}</p>
        </div>
      </div>

      <div className="booking-section">
        <h3>Showtimes</h3>
        <div className="showtimes">
          {movie.showtimes.map(time => (
            <button key={time} onClick={() => handleBookClick(time)}>
              {time}
            </button>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default MovieDetail;
