import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import { Container, Typography } from '@mui/material';
import Profile from 'pages/Profile';
import Gallery from 'pages/Gallery';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Container maxWidth="lg" sx={{ padding: 2 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;

export const Home: React.FC = () => {
  return (
    <Typography variant="h3" align="center" gutterBottom>
      Welcome to Electrician Services
    </Typography>
  )
}

export const NotFound: React.FC = () => {
  return (
    <Typography variant="h3" align="center" gutterBottom>
      Not found
    </Typography>
  )
}