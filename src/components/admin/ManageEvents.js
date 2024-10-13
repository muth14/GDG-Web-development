import React, { useState } from 'react';

const ManageEvents = () => {
  const [events, setEvents] = useState([
    { id: 1, name: 'Event 1', date: '2024-10-15' },
    { id: 2, name: 'Event 2', date: '2024-10-20' },
    // Add sample events here
  ]);

  const handleDelete = (id) => {
    setEvents(events.filter((event) => event.id !== id));
    alert('Event deleted successfully!');
  };

  return (
    <div>
      <h2>Manage Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.name} - {event.date} 
            <button onClick={() => handleDelete(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageEvents;
