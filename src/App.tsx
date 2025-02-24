import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import Profile from 'pages/Profile';
import Gallery from 'pages/Gallery';
import { Cloudinary } from "@cloudinary/url-gen"
import { AdvancedImage } from '@cloudinary/react';
import UploadWidget from 'components/utils/UploadWidget';
import { responsive, placeholder } from '@cloudinary/react';

const App: React.FC = () => {
  return (
    <Router>
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
  const [publicId, setPublicId] = useState('');

  const cld = new Cloudinary({ cloud: { cloudName: 'traceback' } });

  return (
    <Typography variant="h3" align="center" gutterBottom>

      <UploadWidget setPublicId={setPublicId} />

      {publicId && (
        <div
          className="image-preview"
          style={{ width: '800px', margin: '20px auto' }}
        >
          <AdvancedImage
            style={{ maxWidth: '100%' }}
            cldImg={cld.image(publicId)}
            plugins={[responsive(), placeholder()]}
          />
        </div>
      )}
      {/* <CarouselImg /> */}
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