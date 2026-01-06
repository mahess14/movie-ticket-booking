const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const movieRoutes = require('./routes/movieRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const userRoutes = require("./routes/userRoutes");
const app = express();
app.use(cors());
app.use(express.json());




mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));


app.use('/api/movies', movieRoutes);
app.use('/api/bookings', bookingRoutes);
app.use("/api/users", userRoutes);





const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
