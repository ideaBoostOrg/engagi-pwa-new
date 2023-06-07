import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/assets/styles/main.scss';
import Profile from './components/profile/profile';
import Qrscan from './components/attendee/qrscan/qrscan';
import Notifications from './components/notifications/notifications';
import Home from './components/attendee/home/home';
import Splash from './components/splash/splash';
import Signup from './components/signup/signup';
import Started from './components/started.tsx/started';
import EventContainer from './components/attendee/home/components/eventContainer';
import Yesterday from './components/attendee/home/components/dummy_pages/yesterday';
import NextDay from './components/attendee/home/components/dummy_pages/nextDay';
import EventCardView from './components/attendee/home/components/eventCardView';
import ExpandedNotification from './components/notifications/expandedNotification';
import Scanner from './components/organizer/scanner/scanner';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Started />} />
                <Route path="/start" element={<Splash />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/events" element={<EventContainer />} />
                <Route path="/home/view" element={<EventCardView />} />
                <Route path="/yesterday" element={<Yesterday />} />
                <Route path="/nextday" element={<NextDay />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/qr" element={<Qrscan />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/notifications/view" element={<ExpandedNotification />} />
                <Route path="/orgScan" element={<Scanner />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
