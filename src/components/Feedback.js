import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = ({ eventId }) => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/feedback`, { eventId, feedback });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Provide feedback"></textarea>
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
