import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BookingList.css';

function BookingList() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/bookings')
      .then(res => setBookings(res.data))
      .catch(err => {
        console.error('Error fetching bookings:', err);
        setError('Failed to load bookings. Please try again later.');
      });
  }, []);

  return (
    <div className='bookingl'>
    <div className="booking-list-container">
      <h2>📋 All Bookings</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {bookings.length > 0 ? (
        <table className="booking-table">
          <thead>
            <tr>
              <th>SI.NO</th>
              <th>User Name</th>
              <th>Movie</th>
              <th>Theater</th>
              <th>City</th>
              <th>Showtime</th>
              <th>Seats</th>
              <th>Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking._id}>
                <td>{index + 1}</td>
                <td>{booking.userName}</td>
                <td>{booking.movieTitle}</td>
                <td>{booking.theaterName}</td>
                <td>{booking.cityName}</td>
                <td>{booking.showtime}</td>
                <td>{booking.seats.join(', ')}</td>
                <td>₹ {booking.totalCost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !error && <p>No bookings found.</p>
      )}
    </div>
    </div>
  );
}

export default BookingList;
