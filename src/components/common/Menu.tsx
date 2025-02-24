import { Drawer } from '@mui/material'
import { JSX } from 'react'

type Props = {
    openMenu: boolean
    close: () => void
    menuBody: JSX.Element
    variant?: 'permanent' | 'persistent' | 'temporary'
}

const Menu = (props: Props) => {
    const { close, menuBody, openMenu, variant = 'temporary' } = props

    return (
        <Drawer
            variant={variant}
            anchor='top'
            open={openMenu}
            onClose={close}
        >
            {menuBody}
        </Drawer>
    )
}

export default Menu