import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import { Container, Typography } from '@mui/material';
import Profile from 'pages/Profile';
import Gallery from 'pages/Gallery';
import { AppCarousle } from 'components/carousel/AppCarousle';
import { GET } from 'api/api-req';

const App: React.FC = () => {
  return (
    <Router>
      {/* <Navbar /> */}
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
  const [isGetworks, setIsGetworks] = React.useState(false)

  const handleGet = async () => {
    await GET("auth").then((data) => {
      console.log({ data })
      setIsGetworks(true)
    })
  }

  return (
    <Typography variant="h3" align="center" gutterBottom>
      <AppCarousle />
      <button onClick={handleGet}>get request</button>
      {isGetworks && <p>get works!</p>}
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