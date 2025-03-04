import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { AdvancedImage } from '@cloudinary/react';
import { responsive, placeholder } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import AppUserContext from 'contexes/AppUserContext';
// import UploadWidget from 'components/utils/UploadWidget';
import { getImagesResource } from 'api/media';
import SystemCarousel from './systemCarousel';

const mainScreenCarouselSwipTime = 5000;

const AppCarousel = () => {
    const [publicIds, setPublicIds] = React.useState<any[]>([])

    React.useEffect(() => {
        if (!!publicIds.length) return

        const resources = localStorage.getItem(`resources`);

        if (resources) {

            const resourcesObj = JSON.parse(resources);
            setPublicIds(extractPublicIds(resourcesObj));

        } else loadUploadedImages();

    }, [publicIds])

    const loadUploadedImages = async () => {
        const data = await getImagesResource();

        localStorage.setItem("resources", JSON.stringify(data.resources));

        setPublicIds(extractPublicIds(data.resources));
    }

    const extractPublicIds = (resources: any) => (resources.map((r: any) => r.public_id))

    const { user } = React.useContext(AppUserContext)
    const cld = new Cloudinary({ cloud: { cloudName: 'traceback' } });

    if (!publicIds.length) return <></>

    if (user !== null && user.email === "mybs2323@gmail.com") {
        return (
            <SystemCarousel publicIds={publicIds} setPublicIds={setPublicIds} />
            /*{ <UploadWidget setPublicId={setPublicId} /> }*/
        )
    }

    return (
        <Carousel
            swipe
            animation='slide'
            duration={5000}
            interval={mainScreenCarouselSwipTime}
            navButtonsProps={{
                style: {
                    backgroundColor: 'cornflowerblue',
                    borderRadius: 8
                }
            }}
        >
            {
                publicIds.map((item, i) => (<AdvancedImage
                    key={i}
                    style={{ willChange: "scroll-position", width: '100%', height: 900, repeat: 'none', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                    cldImg={cld.image(item)}
                    plugins={[responsive(), placeholder()]}
                />))
            }
        </Carousel>
    )
}

export default AppCarousel;