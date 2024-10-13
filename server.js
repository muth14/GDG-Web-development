const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');  // Make sure this is declared only once

const eventRoutes = require('./routes/eventroutes'); // Adjust the path as necessary

const app = express();
const PORT = process.env.PORT || 5002; // Use 5001

// Enable CORS for all incoming requests from your frontend (React) on port 3000
app.use(cors({
    origin: 'http://localhost:3000',  // The React frontend's address
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/event_management', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Register the event routes
app.use('/api', eventRoutes); // This ensures all event-related routes are prefixed with "/api"

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
