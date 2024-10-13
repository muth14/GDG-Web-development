// src/components/admin/CreateEvent.js
import React, { useState } from "react";

const CreateEvent = () => {
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handleCreateEvent = () => {
    console.log("Event Created:", { eventName, date, description, location });
  };

  return (
    <div>
      <h2>Create New Event</h2>
      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <textarea
        placeholder="Event Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Event Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleCreateEvent}>Create Event</button>
    </div>
  );
};

export default CreateEvent;
