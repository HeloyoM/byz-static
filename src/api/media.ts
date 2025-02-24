import { GET, POST } from "./api-req";

const API = 'media'

export const uploadMedia = async (file: any) => {
    return await POST(`${API}/upload`, file)
}

export const getImagesResource = async () => {
    return await GET(`${API}/resources`)
}