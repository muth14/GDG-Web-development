import React, { useState } from 'react';

const RegisterEvent = () => {
  const [events] = useState([
    { id: 1, name: 'Event 1', date: '2024-10-15', description: 'Description of Event 1' },
    { id: 2, name: 'Event 2', date: '2024-10-20', description: 'Description of Event 2' }
  ]);

  const handleRegister = (eventId) => {
    // Handle event registration logic (e.g., API call)
    console.log(`Registered for event with ID: ${eventId}`);
    alert('You have successfully registered for the event!');
  };

  return (
    <div>
      <h2>Register for Event</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <p>Date: {event.date}</p>
            <button onClick={() => handleRegister(event.id)}>Register</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegisterEvent;
