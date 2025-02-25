import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, IconButton, Typography } from '@mui/material';
import Profile from 'pages/Profile';
import Gallery from 'pages/Gallery';
import Home from 'pages/Home';
import ScreenWrapper from 'components/ScreenWrapper';
import './App.css';
import Header from 'components/Header';

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