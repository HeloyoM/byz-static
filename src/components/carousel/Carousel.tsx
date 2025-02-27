import React, { useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import Carousel from 'react-material-ui-carousel';
import { AdvancedImage } from '@cloudinary/react';
import { responsive, placeholder } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import AppUserContext from 'contexes/AppUserContext';
import DeleteIcon from '@mui/icons-material/Delete';
// import UploadWidget from 'components/utils/UploadWidget';
import { getImagesResource, uploadMedia, uploadVideo } from 'api/media';
import { useForm } from 'react-hook-form'

const itemData = [
    {
        img: "cld-sample-5",
        title: 'Breakfast',
        author: '@bkristastucchio',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: "cld-sample-4",
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: "cld-sample-3",
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: "cld-sample-2",
        title: 'Coffee',
        author: '@nolanissac',
        cols: 2,
    },
    {
        img: 'samples/dessert-on-a-plate',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'samples/cup-on-a-table',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'samples/chair-and-coffee-table',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img: 'e9zwqee8midhh9jgenmo',
        title: 'Fern',
        author: '@katie_wasserman',
    },
];

const mainScreenCarouselSwipTime = 5000;

const AppCarousel = () => {
    const [publicIds, setPublicIds] = React.useState([])

    useEffect(() => {
        if (!!publicIds.length) return
        const resources = localStorage.getItem(`resources`)

        if (resources) {

            const resourcesObj = JSON.parse(resources)
            setPublicIds(extractPublicIds(resourcesObj))
        } else loadUploadedImages()

    }, [publicIds])

    const loadUploadedImages = async () => {
        const data = await getImagesResource()

        localStorage.setItem("resources", JSON.stringify(data.resources))

        setPublicIds(extractPublicIds(data.resources))
    }

    const extractPublicIds = (resources: any) => (resources.map((r: any) => r.public_id))



    const { user } = React.useContext(AppUserContext)
    const cld = new Cloudinary({ cloud: { cloudName: 'traceback' } });

    const { register, watch } = useForm()

    const handleUpload = () => {
        const file = watch("file")[0]

        const formData = new FormData()
        formData.append("file", file)

        uploadMedia(formData)
    }

    const handleUploadVideo = () => {
        const video = watch("video")[0];
        console.log({ video })
        const chunkSize = 6_000_000;
        const totalChunks = Math.ceil(video.size / chunkSize);

        const uploadId = crypto.randomUUID();

        for (let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++) {
            const start = chunkIndex * chunkSize;
            const end = Math.min(start + chunkSize, video.size);
            const chunk = video.slice(start, end);

            const formData = new FormData();
            formData.append('video', video);

            const headers = {
                'x-unique-upload-id': uploadId,
                'content-range': `bytes ${start}-${end - 1}/${video.size}`,
            };

            console.log({ formData, headers })

            uploadVideo(formData, headers)

        }

    }

    if (!publicIds.length) return <></>

    if (user !== null && user.email === "mybs2323@gmail.com") {
        return (
            <>
                {/* <UploadWidget setPublicId={setPublicId} /> */}

                <input
                    multiple
                    {...register("file")}
                    type="file"
                />

                {!!watch("file") && <button onClick={handleUpload} type="submit">העלאת תמונה</button>}

                <input
                    multiple
                    placeholder='video'
                    {...register("video")}
                    type="file"
                />

                {!!watch("video") && <button name="video" onClick={handleUploadVideo} type="submit">העלאת וידאו</button>}

                <ImageList sx={{ width: '100%', height: 1100 }}>
                    <ImageListItem key="Subheader" cols={2}>
                        <ListSubheader component="div" style={{ fontWeight: 'bold', textAlign: 'right' }}>במצב שליטת מנהל מערכת</ListSubheader>
                    </ImageListItem>
                    {itemData.map((item, i) => (
                        <ImageListItem key={item.img}>
                            <AdvancedImage
                                key={i}
                                style={{ width: '100%', height: 300, repeat: 'none', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                                cldImg={cld.image(item.img)}
                                plugins={[responsive(), placeholder()]}
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={item.author}
                                actionIcon={
                                    <IconButton
                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        aria-label={`info about ${item.title}`}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </>
        )
    }

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
                publicIds.map((item, i) => (<AdvancedImage
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