import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <h1>🎬 Welcome to CineBook 🎬</h1>
      <p>Book your favorite movie tickets hassle-free!</p>

      <div className="home-buttons">
        <Link to="/movies" className="home-btn">Browse Movies</Link>
        <Link to="/bookings" className="home-btn">My Bookings</Link>
      </div>

      <div className="home-image">
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
