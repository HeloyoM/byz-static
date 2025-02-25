import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { AdvancedImage } from '@cloudinary/react';
import { responsive, placeholder } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen"

const ids = [
    "cld-sample-5",
    "cld-sample-4",
    "cld-sample-3",
    "cld-sample-2",
    "cld-sample",
    "samples/dessert-on-a-plate",
    "samples/cup-on-a-table",
    "samples/chair-and-coffee-table"
]

const mainScreenCarouselSwipTime = 5000

const AppCarousel = () => {
    const cld = new Cloudinary({ cloud: { cloudName: 'traceback' } });

    if (!ids.length) return <></>

    return (
        <Carousel
            swipe
            animation='slide'
            duration={3000}
            interval={mainScreenCarouselSwipTime}
            navButtonsProps={{
                style: {
                    backgroundColor: 'cornflowerblue',
                    borderRadius: 8
                }
            }}
        >
            {
                ids.map((item, i) => (<AdvancedImage
                    key={i}
                    style={{ width: '100%', height: 900, repeat: 'none', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                    cldImg={cld.image(item)}
                    plugins={[responsive(), placeholder()]}
                />))
            }
        </Carousel>
    )
}

export default AppCarousel;