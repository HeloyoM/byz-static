import { Drawer, IconButton } from '@mui/material'
import { JSX } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

type Props = {
    openMenu: boolean
    close: () => void
    menuBody: JSX.Element
    variant?: 'permanent' | 'persistent' | 'temporary'
}
const drawerWidth = 350;
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const Menu = (props: Props) => {
    const { close, menuBody, openMenu, variant = 'temporary' } = props
    const theme = useTheme();
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant={variant}
            anchor="right"
            open={openMenu}
        >

            <DrawerHeader>
                <IconButton onClick={close}>
                    {theme.direction === 'ltr' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>

            {menuBody}
        </Drawer>
    )
}

export default Menu