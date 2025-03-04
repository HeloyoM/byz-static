import { IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader } from "@mui/material"
import { deleteResource, uploadMedia, uploadVideo } from 'api/media';
import { useForm } from 'react-hook-form';
import { AdvancedImage } from '@cloudinary/react';
import { responsive, placeholder } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
    publicIds: string[]
    setPublicIds: React.Dispatch<React.SetStateAction<any[]>>
}
const SystemCarousel = ({ publicIds, setPublicIds }: Props) => {
    const { register, watch } = useForm()

    const cld = new Cloudinary({ cloud: { cloudName: 'traceback' } });

    const handleUpload = async () => {
        const file = watch("file")[0]

        const formData = new FormData()
        formData.append("file", file)

        const response = await uploadMedia(formData)

        setPublicIds(perv => [...publicIds, response.public_id])
    }

    const handleUploadVideo = () => {
        const video = watch("video")[0];

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

            uploadVideo(formData, headers)

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
        </>
    )
}

export default SystemCarousel;