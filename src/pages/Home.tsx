import React from 'react';
import { Typography } from '@mui/material';
import AppCarousel from 'components/carousel/Carousel';

const Home: React.FC = () => {
    return (
        <Typography variant="h3" align="center" gutterBottom>

            {/* <UploadWidget setPublicId={setPublicId} />
  
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
        )} */}

            <AppCarousel />

        </Typography>
    )
}

export default Home;