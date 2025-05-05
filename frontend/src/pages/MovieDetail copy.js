import './MovieDetail.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [selectedShowtime, setSelectedShowtime] = useState('');
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [userName, setUserName] = useState('');

  const ticketPrice = 150; // ₹150 per seat
  const totalCost = selectedSeats.length * ticketPrice;

  useEffect(() => {
    axios.get(`http://localhost:5000/api/movies`)
      .then(res => {
        const found = res.data.find(m => m._id === id);
        
        setMovie(found);
        console.log("Movie Data:", found);
      });
  }, [id]);

  const handleBooking = () => {
    axios.post('http://localhost:5000/api/bookings', {
      movieId: id,
      showtime: selectedShowtime,
      seats: selectedSeats.map(seat => seat.trim()),
      userName,
      totalCost, // Optional: if your backend accepts cost
    }).then(() => alert("Booking successful!"))
      .catch(err => {
        console.error(err);
        alert("Booking failed!");
      });
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-detail-container">
      <div className="movie-info">
        <img src={movie.poster} alt={movie.title} className="movie-poster" />
        <div className="movie-details">
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
          <p><strong>Theater:</strong> {movie.theaterName}</p>
         

        </div>
      </div>

      <div className="booking-section">
        <h3>Showtimes</h3>
        <div className="showtimes">
          {movie.showtimes.map(time => (
            <button
              key={time}
              onClick={() => setSelectedShowtime(time)}
              className={selectedShowtime === time ? 'selected' : ''}
            >
              {time}
            </button>
          ))}
        </div>

        <h3>Select Seats</h3>
        <div className="seat-grid">
          {["A", "B", "C", "D"].map(row =>
            [1, 2, 3, 4, 5, 6].map(num => {
              const seat = `${row}${num}`;
              const isSelected = selectedSeats.includes(seat);

              return (
                <button
                  key={seat}
                  className={`seat ${isSelected ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedSeats(prev =>
                      prev.includes(seat)
                        ? prev.filter(s => s !== seat)
                        : [...prev, seat]
                    );
                  }}
                >
                  {seat}
                </button>
              );
            })
          )}
        </div>

        <h3>Price per Seat: ₹{ticketPrice}</h3>
        <h3>Total Cost: ₹{totalCost}</h3>

        <h3>Your Name</h3>
        <input
          type="text"
          placeholder="Enter your name"
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />

        <button className="book-btn" onClick={handleBooking}>
          Book Now
        </button>
      </div>
    </div>
  );
}

export default MovieDetail;
