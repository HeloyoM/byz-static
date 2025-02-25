import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Typography } from '@mui/material';
import Profile from 'pages/Profile';
import Gallery from 'pages/Gallery';
import Home from 'pages/Home';
import ScreenWrapper from 'components/ScreenWrapper';
import Header from 'components/Header';
import './App.css';

const App: React.FC = () => {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ScreenWrapper ><Home /></ScreenWrapper>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </Router>
  );
};

export default App;

export const NotFound: React.FC = () => {
  return (
    <Typography variant="h3" align="center" gutterBottom>
      Not found
    </Typography>
  )
}