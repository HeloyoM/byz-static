import axios from "axios";
import { DELETE, GET } from "./api-req";
import { LOCAL_DEV } from "./base-url";

const API = 'media'

export const uploadMedia = async (file: any) => {
    const response = await axios.post(`${LOCAL_DEV}/${API}/upload-image`, file, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    }).then((res) => res.data)

    return response
}

export const uploadVideo = async (file: any) => {
    const response = await axios.post(`${LOCAL_DEV}/${API}/upload-large-stream-from-browser`, file );

    return response
}

export const getImagesResource = async () => {
    const data = await GET(`${API}/list-uploaded-files`)

    return data
}

export const deleteResource = async (public_id: string) => {
    const data = await DELETE(`${API}/delete/${public_id}`)

    return data
}