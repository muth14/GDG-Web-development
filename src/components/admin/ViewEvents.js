import React, { useState } from 'react';

const ViewEvents = () => {
  const [events] = useState([
    { id: 1, name: 'Event 1', date: '2024-10-15' },
    { id: 2, name: 'Event 2', date: '2024-10-20' },
    // Add sample events here
  ]);

  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.name} - {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewEvents;
