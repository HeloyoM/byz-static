import React, { useEffect } from 'react';
import { Typography } from "@mui/material";
import '../App.css';
import { IListItem } from 'interface/IListItem.interface';
import Menu from 'components/common/Menu';
import AppList from 'components/common/AppList';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth0 } from "@auth0/auth0-react";
import AppUserContext from 'contexes/AppUserContext';
import GoogleButton from './common/GoogleButton';
import AppModal from './common/AppModal';
import settings from '../settings/settings.json'

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <GoogleButton handleClick={loginWithRedirect}>Log In</GoogleButton>;
};

const LogoutButton = () => {
    const { logout } = useAuth0();
    return (<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Log Out
    </button>)
}

const Header = () => {
    const { user: authUser, isAuthenticated } = useAuth0();
    const [openModal, setOpenModal] = React.useState(false)
    // add it and the useEffect below, to add sticky style to the menu
    // const [isSticky, setSticky] = React.useState(false)
    const [openMenu, setOpenMenu] = React.useState(false)
    console.log(settings.name)
    const openMenuModal = () => { setOpenMenu(true) }
    const closeMenuModal = () => { setOpenMenu(false) }

    const { updateUserContext } = React.useContext(AppUserContext)

    const optionsListItems: IListItem[] = [
        { primary: 'galery', handleClick: () => { }, secondary: '' },
        {
            primary: 'active', handleClick: () => { }, secondary: ''
        },
        {
            primary: <LoginButton />, handleClick: () => { }, secondary: ''
        }, { primary: <LogoutButton />, handleClick: () => { }, secondary: '' }
    ]

    const closeModal = () => {
        setOpenModal(prev => false)
    }

    useEffect(() => {
        if (isAuthenticated) {
            if (authUser?.email === "mybs2323@gmail.com") {
                localStorage.setItem('token', authUser?.email!)
                updateUserContext(authUser)
                optionsListItems.push({ primary: <LogoutButton />, handleClick: () => { }, secondary: '' })
            } else {
                setOpenModal(true)
            }
        }
    }, [isAuthenticated, authUser])

    // React.useEffect(() => {

    //     const handleScroll = () => {
    //         if (window.scrollY > 0) {
    //             setSticky(true)
    //         } else {
    //             setSticky(false)
    //         }
    //     }


    //     window.addEventListener('scroll', handleScroll)


    //     return () => {
    //         window.removeEventListener('scroll', handleScroll)
    //     }
    // }, [])

    return (
        <>
            <Typography className={/*isSticky ? 'title sticky' : */'sticky title'}>
                <Typography style={{ margin: 'auto auto', fontSize: '22px' }}>{settings.name.toUpperCase()}</Typography>
                {!openMenu && <MenuIcon onClick={openMenuModal} className="menu-btn" />}

                <Menu menuBody={<AppList items={optionsListItems} />} close={closeMenuModal} openMenu={openMenu} />

            </Typography>
            <AppModal open={openModal} children={<Typography>Only admin is able to login!</Typography>} close={closeModal} />
        </>
    )
}

export default Header;