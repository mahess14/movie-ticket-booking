import './BookingPage.css';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function BookingPage() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const selectedShowtime = new URLSearchParams(location.search).get('showtime');

  const [movie, setMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [userName, setUserName] = useState('');

  const ticketPrice = 150;
  const totalCost = selectedSeats.length * ticketPrice;

  // Fetch movie
  useEffect(() => {
    axios.get('http://localhost:5000/api/movies')
      .then(res => {
        const found = res.data.find(m => m._id === id);
        setMovie(found);
      })
      .catch(err => console.log(err));
  }, [id]);

  // Booking handler
  const handleBooking = () => {
    if (!userName.trim()) {
      alert("Name is required");
      return;
    }

    if (selectedSeats.length === 0) {
      alert("Please select at least one seat");
      return;
    }

    axios.post('http://localhost:5000/api/bookings', {
      movieId: id,
      showtime: selectedShowtime,
      seats: selectedSeats,
      userName,
      totalCost
    })
    .then(() => {
      alert("Booking successful!");
      navigate('/'); // go to home
    })
    .catch(() => alert("Booking failed"));
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="bookingt">
      <div className="booking-container">

        {/* Home Button */}
        <button className="home-btn" onClick={() => navigate('/')}>
          ⬅ Back to Home
        </button>

        <h1>{movie.title}</h1>
        <p><strong>Showtime:</strong> {selectedShowtime}</p>

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
                  onClick={() =>
                    setSelectedSeats(prev =>
                      prev.includes(seat)
                        ? prev.filter(s => s !== seat)
                        : [...prev, seat]
                    )
                  }
                >
                  {seat}
                </button>
              );
            })
          )}
        </div>

        <h2>Price per Seat: ₹{ticketPrice}</h2>
        <h3>Total Cost: ₹{totalCost}</h3>

        <h4>Your Name</h4>
        <input
          type="text"
          placeholder="Enter your name"
          value={userName}
          required
          onChange={e => setUserName(e.target.value)}
        />

        <button className="book-btn" onClick={handleBooking}>
          Book Now
        </button>

      </div>
    </div>
  );
}

export default BookingPage;
