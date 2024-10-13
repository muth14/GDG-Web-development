// controllers/eventController.js
const Event = require('../models/eventModel'); // Import the Event model

// Create a new event
const createEvent = async (req, res) => {
    const { name, date, description, location } = req.body;
    try {
        const newEvent = new Event({
            name,
            date,
            description,
            location,
            createdBy: req.user.id, // Assuming user info comes from auth middleware
        });
        await newEvent.save();
        res.status(201).json({ message: 'Event created successfully', event: newEvent });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Update an existing event
const updateEvent = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const updatedEvent = await Event.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedEvent) return res.status(404).json({ message: 'Event not found' });
        res.status(200).json({ message: 'Event updated successfully', event: updatedEvent });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Delete an event
const deleteEvent = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedEvent = await Event.findByIdAndDelete(id);
        if (!deletedEvent) return res.status(404).json({ message: 'Event not found' });
        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get all events
const getEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get an event by ID
const getEventById = async (req, res) => {
    const { id } = req.params;
    try {
        const event = await Event.findById(id);
        if (!event) return res.status(404).json({ message: 'Event not found' });
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Register for an event
const registerForEvent = async (req, res) => {
    const { eventId } = req.body;
    try {
        const event = await Event.findById(eventId);
        if (!event) return res.status(404).json({ message: 'Event not found' });
        event.attendees.push({ user: req.user.id }); // Assuming req.user is available from auth middleware
        await event.save();
        res.status(200).json({ message: 'Registered for event successfully', event });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Submit feedback for an event
const submitFeedback = async (req, res) => {
    const { eventId, feedback } = req.body;
    try {
        const event = await Event.findById(eventId);
        if (!event) return res.status(404).json({ message: 'Event not found' });
        event.feedbacks.push({ user: req.user.id, feedback });
        await event.save();
        res.status(200).json({ message: 'Feedback submitted successfully', event });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = {
    createEvent,
    updateEvent,
    deleteEvent,
    getEvents,
    getEventById,
    registerForEvent,
    submitFeedback,
};
