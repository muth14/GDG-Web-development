import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import CreateEvent from './components/admin/CreateEvents';
import ManageEvents from './components/admin/ManageEvents';
import ScheduleEvent from './components/admin/ScheduleEvents';
import ViewEvents from './components/admin/ViewEvents';
import RegisterEvent from './components/user/RegisterEvent';
import SearchEvents from './components/user/searchEvents';
import EventFeedback from './components/user/EventFeedback';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/manage-events" element={<ManageEvents />} />
        <Route path="/schedule-event" element={<ScheduleEvent />} />
        <Route path="/view-events" element={<ViewEvents />} />
        <Route path="/register-event" element={<RegisterEvent />} />
        <Route path="/search-events" element={<SearchEvents />} />
        <Route path="/event-feedback" element={<EventFeedback />} />
      </Routes>
    </Router>
  );
}

export default App;
