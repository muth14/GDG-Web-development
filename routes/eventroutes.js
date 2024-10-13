// routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const {
    createEvent,
    updateEvent,
    deleteEvent,
    getEvents,
    getEventById,
    registerForEvent,
    submitFeedback
} = require('../controllers/eventcontroller');
const authMiddleware = require('../middleware/authMiddleware'); // Protect routes

// Admin Routes
router.post('/events', authMiddleware, createEvent);  // This is the route for creating events
router.put('/events/:id', authMiddleware, updateEvent);
router.delete('/events/:id', authMiddleware, deleteEvent);
router.get('/events', getEvents); // Public: Anyone can view events
router.get('/events/:id', getEventById); // Public: Anyone can view event by ID

module.exports = router;

