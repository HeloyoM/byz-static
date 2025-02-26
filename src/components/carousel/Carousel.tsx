import React from 'react';
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
import UploadWidget from 'components/utils/UploadWidget';
import { uploadMedia } from 'api/media';
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

const ids = [
    "cld-sample-5",
    "cld-sample-4",
    "cld-sample-3",
    "cld-sample-2",
    "samples/dessert-on-a-plate",
    "samples/cup-on-a-table",
    "samples/chair-and-coffee-table",
    "e9zwqee8midhh9jgenmo"
]

const mainScreenCarouselSwipTime = 5000;

const AppCarousel = () => {
    const [public_id, setPublicId] = React.useState('')
    const { user } = React.useContext(AppUserContext)
    const cld = new Cloudinary({ cloud: { cloudName: 'traceback' } });

    const { register, watch } = useForm()

    // const handleUpload = () => {
    //     const file = watch("file")[0]

    //     console.log({ file })
    //     // uploadMedia(file)

    // }
    React.useEffect(() => {
        if (!watch("file")) return

        const file = watch("file")[0]

        const formData = new FormData()
        formData.append("file", file)


        // const file = watch("file")
        // console.log({ file })

        // const formData = new FormData()

        // formData.append("file", file)

        uploadMedia(formData)
    }, [watch("file")])

    if (!ids.length) return <></>

    if (user !== null && user.email === "mybs2323@gmail.com") {
        return (
            <>
                {/* <UploadWidget setPublicId={setPublicId} /> */}
                <form id="uploadForm" encType="multipart/form-data">
                    <input
                        multiple
                        {...register("file")}
                        type="file"
                    />
                    <button type="submit">Upload Image</button>
                </form>
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