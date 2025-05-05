import { useEffect, useState } from 'react';
import axios from 'axios';
import './MB.css';

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/bookings')
      .then(res => {
        setBookings(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching bookings:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">Loading your bookings...</p>;

  if (bookings.length === 0) return <p className="no-bookings">You have no bookings yet.</p>;

  return (
    <div className="my-bookings-container">
      <h2>🎟️ My Bookings</h2>
      <div className="bookings-list">
        {bookings.map((booking, index) => (
          <div key={index} className="booking-card">
            <h3>{booking.movieTitle}</h3>
            <p><strong>Theater:</strong> {booking.theaterName}</p>
            <p><strong>Showtime:</strong> {booking.showtime}</p>
            <p><strong>Seats:</strong> {booking.seats.join(', ')}</p>
            <p><strong>Name:</strong> {booking.userName}</p>
            <p><strong>Total Paid:</strong> ₹{booking.totalCost}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyBookings;
