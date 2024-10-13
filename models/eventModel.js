const mongoose = require('mongoose');

// Define the Event schema
const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, // Assuming events are tied to a user/admin
        ref: 'User',
        required: true,
    },
    attendees: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
            registeredAt: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    feedbacks: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
            feedback: {
                type: String,
                trim: true,
            },
            submittedAt: {
                type: Date,
                default: Date.now,
            },
        },
    ],
}, {
    timestamps: true, // Automatically add createdAt and updatedAt timestamps
});

// Create the Event model
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
