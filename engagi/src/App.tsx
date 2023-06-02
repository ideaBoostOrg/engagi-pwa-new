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

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Started />} />
                <Route path="/start" element={<Splash />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/notification" element={<Notifications />} />
                <Route path="/qr" element={<Qrscan />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
