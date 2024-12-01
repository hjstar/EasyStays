const express = require("express");
const cors = require("cors");
const dbConfig = require("./db"); // Import the database configuration

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON in requests

// Import routes
const roomsRoute = require("./routes/roomsRoute");
const usersRoute = require("./routes/usersRoute");
const bookingsRoute = require("./routes/bookingsRoute");

// Define routes
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);
app.use("/api/bookings", bookingsRoute);

// Server configuration
const port = 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
