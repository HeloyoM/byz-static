import { createContext } from 'react'

export default createContext({
    serverMsg: '',
    updateServerMsgContext: (msg: any) => { },
})