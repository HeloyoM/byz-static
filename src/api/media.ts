import { POST } from "./api-req";
import { LOCAL_DEV } from "./base-url";

const API = 'media'

export const uploadMedia = async (file: any) => {
    return await POST(`${API}/upload`, file)
}