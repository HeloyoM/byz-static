import React from 'react';
import { Typography } from "@mui/material";
import '../App.css';
import { IListItem } from 'interface/IListItem.interface';
import Menu from 'components/common/Menu';
import AppList from 'components/common/AppList';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    const [isSticky, setSticky] = React.useState(false)
    const [openMenu, setOpenMenu] = React.useState(false)

    const openMenuModal = () => { setOpenMenu(true) }
    const closeMenuModal = () => { setOpenMenu(false) }

    const optionsListItems: IListItem[] = [
        { primary: 'galery', handleClick: () => { }, secondary: '' },
        {
            primary: 'active', handleClick: () => { }, secondary: ''
        }
    ]

    React.useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        }


        window.addEventListener('scroll', handleScroll)


        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <Typography className={isSticky ? 'title sticky' : 'title'}>
            <Typography style={{ margin: 'auto auto' }}>BYL</Typography>
            {openMenu ? <CloseIcon className="menu-btn" onClick={closeMenuModal} /> : <MenuIcon onClick={openMenuModal} className="menu-btn" />}

            <Menu menuBody={<AppList items={optionsListItems} />} close={closeMenuModal} openMenu={openMenu} />

        </Typography>
    )
}

export default Header;