import { createContext } from 'react'
import { User } from '@auth0/auth0-react'

export default createContext({
    user: {} as User,
    updateUserContext: (user: any) => { },
})