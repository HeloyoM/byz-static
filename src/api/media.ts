import axios from "axios";
import { GET, POST } from "./api-req";
import { LOCAL_DEV } from "./base-url";
const API = 'media'

export const uploadMedia = async (file: any) => {

    console.log({ file })
    const response = await axios.post(`${LOCAL_DEV}/${API}/upload-image`, file, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    console.log({ response })
}

export const uploadVideo = async (file: any) => {

    console.log({ file })
    const response = await axios.post(`${LOCAL_DEV}/${API}/upload-video`, file, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    console.log({ response })
}

export const getImagesResource = async () => {
    return await GET(`${API}/resources`)
}