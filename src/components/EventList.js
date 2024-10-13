import React, { useEffect, useState } from 'react';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <strong>{event.name}</strong> - {event.date} - {event.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
