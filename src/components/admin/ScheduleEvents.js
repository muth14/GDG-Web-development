import React, { useState } from 'react';

const ScheduleEvent = () => {
  const [eventId, setEventId] = useState('');
  const [eventTime, setEventTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle event scheduling logic here (e.g., API call)
    console.log(`Event ID: ${eventId}, Scheduled Time: ${eventTime}`);
    alert('Event scheduled successfully!');
  };

  return (
    <div>
      <h2>Schedule Event</h2>
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
          <label>Event Time:</label>
          <input 
            type="time" 
            value={eventTime} 
            onChange={(e) => setEventTime(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Schedule Event</button>
      </form>
    </div>
  );
};

export default ScheduleEvent;
