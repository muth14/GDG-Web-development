import React, { useState } from 'react';

const CreateEvent = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventLocation, setEventLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle event creation logic here (e.g., API call)
    console.log({
      name: eventName,
      date: eventDate,
      description: eventDescription,
      location: eventLocation
    });
    alert('Event created successfully!');
  };

  return (
    <div>
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Event Name:</label>
          <input 
            type="text" 
            value={eventName} 
            onChange={(e) => setEventName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Date:</label>
          <input 
            type="date" 
            value={eventDate} 
            onChange={(e) => setEventDate(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea 
            value={eventDescription} 
            onChange={(e) => setEventDescription(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Location:</label>
          <input 
            type="text" 
            value={eventLocation} 
            onChange={(e) => setEventLocation(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
