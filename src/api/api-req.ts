import axios from 'axios'
import { LOCAL_DEV } from './base-url'

export async function POST(endpoint: string, body: any) {
    return await (
        await axios.post(`${LOCAL_DEV}/${endpoint}`, body)
    ).data
}

export async function PUT(endpoint: string, body: any) {
    return await (
        await axios.put(`${LOCAL_DEV}/${endpoint}`, body)
    ).data
}

export async function GET(endpoint?: string) {
    return await (
        await axios.get(`${LOCAL_DEV}/${endpoint}`)
    ).data
}

export async function PATCH(endpoint: string, body: any) {
    return await (
        await axios.patch(`${LOCAL_DEV}/${endpoint}`, body)
    ).data
}

export async function DELETE(endpoint: string) {
    return await (
        await axios.delete(`${LOCAL_DEV}/${endpoint}`)
    ).data
}

// const getRequestConfiguration = () => {
//     const tokenAccess = getToken()

//     const token = tokenAccess ? tokenAccess : null
//     const headers = token ? { Authorization: `Bearer ${tokenAccess}`, 'Content-type': "application/json" } : { Authorization: null, 'Content-type': "application/json" }

//     return {
//         headers
//     }
// }