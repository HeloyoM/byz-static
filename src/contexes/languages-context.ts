import { createContext } from 'react'

export const AppDirectionContext = createContext({
	isRtlDirection: false,
	toggleDirection: (isRtl: boolean) => {},
})