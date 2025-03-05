import { Box, IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader, Typography } from "@mui/material";
import { deleteResource, uploadMedia, uploadVideo } from 'api/media';
import { useForm } from 'react-hook-form';
import { AdvancedImage } from '@cloudinary/react';
import { responsive, placeholder } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import DeleteIcon from '@mui/icons-material/Delete';
import AppServerMsg from "contexes/AppServerMsg";
import React from "react";
import { Toast } from "enum/Toast.enum";

type Props = {
    publicIds: string[]
    setPublicIds: React.Dispatch<React.SetStateAction<any[]>>
}
const SystemCarousel = ({ publicIds, setPublicIds }: Props) => {
    const { register, watch } = useForm()

    const { updateServerMsgContext } = React.useContext(AppServerMsg)

    const cld = new Cloudinary({ cloud: { cloudName: 'traceback' } });

    const handleUpload = async () => {
        const file = watch("file")[0];

        const formData = new FormData();
        formData.append("file", file);

        const response = await uploadMedia(formData);

        setPublicIds(perv => [...publicIds, response.public_id]);
    }

    const handleUploadVideo = async () => {
        const video = watch("video")[0];

        const formData = new FormData();
        formData.append('video', video);

        const response = await uploadVideo(formData);
        
        if(response.status === 200) {
            updateServerMsgContext(Toast.VIDEO_UPLOADED)
        } 
    }

    const handleDeleteResource = async (id: string) => {
        const response = await deleteResource(id)

        // if(response){
        //     const updatedArray = 
        // }
    }

    return (
        <>
            {/* <UploadWidget setPublicId={setPublicId} /> */}

            <ImageList sx={{ width: '100%', height: 1100 }}>
                <ImageListItem key="Subheader" cols={2}>
                    <ListSubheader component="div" style={{ fontWeight: 'bold', textAlign: 'right' }}>במצב שליטת מנהל מערכת</ListSubheader>
                </ImageListItem>
                {publicIds.map((item, i) => (
                    <ImageListItem key={item}>
                        <AdvancedImage
                            key={i}
                            style={{ width: '100%', height: 300, repeat: 'none', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                            cldImg={cld.image(item)}
                            plugins={[responsive(), placeholder()]}
                        />
                        <ImageListItemBar
                            onClick={() => handleDeleteResource(item)}
                            sx={{ "root": { backgroundColor: 'white !impoartant' } }}
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgb(255, 0, 0)' }}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <Box style={{ border: '1px solid cornflowerblue', width: 500, margin: '3% 3%' }}>
                <Typography>העלאת תמונה</Typography>
                <input
                    multiple
                    {...register("file")}
                    type="file"
                />

                {watch("file") && watch("file")[0] && <button onClick={handleUpload} style={{ backgroundColor: 'cornflowerblue', fontSize: '19px', borderRadius: 8, border: 'none' }} type="submit">העלאת תמונה</button>}

            </Box>

            <Box style={{ border: '1px solid cornflowerblue', width: 500, margin: '3% 3%' }}>
                <Typography>העלאת וידאו</Typography>
                <input
                    multiple
                    placeholder='video'
                    {...register("video")}
                    type="file"
                />

                {watch("video") && watch("video")[0] && <button name="video" style={{ backgroundColor: 'cornflowerblue', fontSize: '19px', borderRadius: 8, border: 'none' }} onClick={handleUploadVideo} type="submit">העלאת וידאו</button>}
            </Box>
        </>
    )
}

export default SystemCarousel;