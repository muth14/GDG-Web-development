import React, { useState, useEffect } from 'react';

const SearchEvents = () => {
  const [events, setEvents] = useState([]); // State to store events
  const [searchTerm, setSearchTerm] = useState(''); // State for search input

  useEffect(() => {
    // Fetch events from an API or local data
    // Replace with your actual API endpoint or static data
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://api.example.com/events'); // Replace with actual API
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Search Events</h2>
      <input
        type="text"
        placeholder="Search for events"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <li key={event.id}>
              <h3>{event.name}</h3>
              <p>{event.description}</p>
              <p>{event.date}</p>
            </li>
          ))
        ) : (
          <p>No events found</p>
        )}
      </ul>
    </div>
  );
};

export default SearchEvents;
