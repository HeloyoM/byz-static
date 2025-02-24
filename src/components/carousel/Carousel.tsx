import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { AdvancedImage } from '@cloudinary/react';
import { responsive, placeholder } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen"
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { getImagesResource } from 'api/media';
import { ICloudinaryResource } from 'interface/ICloudinaryResource.interface';

const AppCarousel = () => {
    const [publicId, setPublicId] = useState<string[]>([]);

    useEffect(() => {
        getResources()
    }, [])

    const getResources = async (): Promise<void> => {
        const data = await getImagesResource()

        mapPublicIds(data)
    }

    const mapPublicIds = (data: any): void => {
        const ids: string[] = []

        data.map((r: ICloudinaryResource, i: number) => {
            ids.push(r.public_id)
        })

        console.log({ ids })

        setPublicId(ids)
    }

    const cld = new Cloudinary({ cloud: { cloudName: 'traceback' } });

    // `https://res.cloudinary.com/traceback/image/upload/${publicId}`

    if (!publicId) return <></>

    return (
        <Carousel
            swipe
            duration={5000}
            interval={6000}
            animation='slide'
            navButtonsProps={{
                style: {
                    backgroundColor: 'cornflowerblue',
                    borderRadius: 8
                }
            }}
        >
            {/* <AdvancedImage
                style={{ maxWidth: '100%' }}
                cldImg={cld.image(publicId)}
                plugins={[responsive(), placeholder()]}
            /> */}

        </Carousel>
    )
}

export default AppCarousel;