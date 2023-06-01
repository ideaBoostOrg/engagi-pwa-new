import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/profile/profile';
import Qrscan from './components/qrscan/qrscan';
import Notifications from './components/notifications/notifications';
import Home from './components/home/home';
import Splash from './components/splash/splash';
import Signup from './components/signup/signup';

const App = () => {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<Splash />} />
                <Route path="/home" element={<Home />} />
                <Route path="/notification" element={<Notifications />} />
                <Route path="/qr" element={<Qrscan />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
