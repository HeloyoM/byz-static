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

export const uploadVideo = async (file: any, headers: any) => {
    const response = await axios.post(`${LOCAL_DEV}/${API}/upload-large-from-local`, file, {
        headers
    });
    console.log({ response })
}

export const getImagesResource = async () => {
    const data = await GET(`${API}/list-uploaded-files`)

    return data
}