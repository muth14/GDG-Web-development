import React, { useState } from 'react';

const EventFeedback = () => {
  const [eventId, setEventId] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle feedback submission logic (e.g., API call)
    console.log(`Feedback for event ${eventId}: ${feedback}`);
    alert('Feedback submitted successfully!');
  };

  return (
    <div>
      <h2>Submit Event Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Event ID:</label>
          <input
            type="text"
            value={eventId}
            onChange={(e) => setEventId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Feedback:</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default EventFeedback;
