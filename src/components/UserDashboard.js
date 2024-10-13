import React from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <div>
      <h2>User Dashboard</h2>
      <Link to="/events">View Events</Link>
    </div>
  );
};

export default UserDashboard;
