import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
     
    <Link to="/" className="navbar-logo"> 🎬 MovieFlix</Link>
     
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/bookings">My Bookings</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
      
      </ul>
    </nav>
  );
}

export default Navbar;
