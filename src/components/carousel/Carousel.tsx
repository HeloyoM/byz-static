import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { AdvancedImage } from '@cloudinary/react';
import { responsive, placeholder } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen"

const ids = [
    "happy_people",
    "cld-sample-5",
    "cld-sample-4",
    "cld-sample-3",
    "cld-sample-2",
    "cld-sample",
    "samples/woman-on-a-football-field",
    "samples/dessert-on-a-plate",
    "samples/cup-on-a-table",
    "samples/chair-and-coffee-table"
]

const mainScreenCarouselSwipTime = 5000
const AppCarousel = () => {
    const [currentImg, setCurrentImg] = useState(0);
    const [publicId, setPublicId] = useState<string>(ids[currentImg]);

    const cld = new Cloudinary({ cloud: { cloudName: 'traceback' } });

    useEffect(() => {
        setTimeout(() => {
            const next = currentImg + 1;
            setCurrentImg(prev => next);

            setPublicId(ids[next]);

        }, mainScreenCarouselSwipTime);

    }, [publicId])

    if (!publicId) return <></>

    return (
        <Carousel
            swipe
            // duration={5000}
            // interval={6000}
            // animation='slide'
            navButtonsProps={{
                style: {
                    backgroundColor: 'cornflowerblue',
                    borderRadius: 8
                }
            }}
        >
            <AdvancedImage
                style={{ maxWidth: '100%' }}
                cldImg={cld.image(publicId)}
                plugins={[responsive(), placeholder()]}
            />

        </Carousel>
    )
}

export default AppCarousel;