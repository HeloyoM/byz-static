import React from 'react';
import { Grid2, Card, CardMedia, Typography } from '@mui/material';

const sampleImages = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150'
];

const Gallery: React.FC = () => {
    return (
        <>
            <Typography variant="h4" align="center" gutterBottom>
                Work Gallery
            </Typography>
            <Grid2 container spacing={3} justifyContent="center">
                {sampleImages.map((img, index) => (
                    <Card>
                        <CardMedia
                            component="img"
                            height="150"
                            image={img}
                            alt={`Work ${index + 1}`}
                        />
                    </Card>
                ))}
            </Grid2>
        </>
    );
};

export default Gallery;