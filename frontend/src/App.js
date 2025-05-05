import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';
import Navbar from './components/Navbar';
import BookingPage from './pages/BookingPage';
import HomePage from './pages/HomePage';
import BookingList from './pages/BookingList';
import MB from "./pages/MB"
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import Signup from './pages/Signup/SignupPage';
import Login from "./pages/Login/LoginPage"



function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MovieList />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/bookings" element={<BookingList />} />
      <Route path="/bookingss" element={<MB />} />
      <Route path="/booking/:id" element={<BookingPage />} />
      <Route path="/booking-list" element={<BookingList />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
