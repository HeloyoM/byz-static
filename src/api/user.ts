import { DELETE, GET, PATCH, POST, PUT } from './api-req';

const API = 'user'

export const getUserProfile = async () => {
    return await GET(API)
}
