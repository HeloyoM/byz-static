import { GET, POST } from "./api-req";

const API = 'media'

export const uploadMedia = async (file: any) => {
    return await POST(`${API}/upload`, file)
}

export const getImagesResource = async () => {
    // const token = btoa('489429477952237:-fb9R6h_RAWgIhscYm_jVDQQ_38')
    return await GET(`${API}/resources`)
}