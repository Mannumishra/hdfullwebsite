const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const Router = require('./Router/Route');
const connectDb = require('./Config/db');

// // CORS configuration
const allowedOrigins = [
    'https://increaselimit.in',
    'https://www.increaselimit.in',
    'https://admin.increaselimit.in',
];

app.use(cors({
    origin: allowedOrigins,
    credentials: true, // Enable cookies and auth headers
}));

// app.use(cors())

// Middleware for parsing requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/v1', Router);

// Start the server
const PORT = process.env.PORT || 7000; // Fallback to port 3000 if PORT is not defined
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Connect to the database
connectDb();
