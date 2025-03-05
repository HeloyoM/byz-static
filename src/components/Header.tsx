import React, { JSX, useEffect, useMemo } from 'react';
import { Button, Typography } from "@mui/material";
import '../App.css';
import { IListItem } from 'interface/IListItem.interface';
import Menu from 'components/common/Menu';
import AppList from 'components/common/AppList';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth0 } from "@auth0/auth0-react";
import AppUserContext from 'contexes/AppUserContext';
import GoogleButton from './common/GoogleButton';
import AppModal from './common/AppModal';
import settings from '../settings/settings.json';

const Logo = require('../assets/logo.png')

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <GoogleButton handleClick={loginWithRedirect}>התחבר כמנהל</GoogleButton>;
};

const LogoutButton = () => {
    const { logout } = useAuth0();
    return (<GoogleButton handleClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        התנתק ממצב מנהל
    </GoogleButton>)
}

const Header = () => {
    const { user: authUser, isAuthenticated } = useAuth0();
    const [openModal, setOpenModal] = React.useState(false)
    const [openMenu, setOpenMenu] = React.useState(false)

    const openMenuModal = () => { setOpenMenu(true) }
    const closeMenuModal = () => { setOpenMenu(false) }

    const { updateUserContext } = React.useContext(AppUserContext)

    const optionsListItems = useMemo(() => ([
        <Button sx={[
            {
                height: '100px',
                fontSize: '30px',
                fontFamily: "Sora, sens-serif",
                '&:hover': {
                    color: 'white',
                    backgroundColor: '#244545',
                },
            },]}>גלריה</Button>, <img src={Logo} width={75} height={75} style={{ margin: 'auto auto' }} />, <LoginButton />,
    ]), [authUser])

    const closeModal = () => { setOpenModal(prev => false) }

    useEffect(() => {
        if (isAuthenticated) {
            if (authUser?.email === "mybs2323@gmail.com") {
                updateUserContext(authUser)

                optionsListItems.pop() // remove login button
                optionsListItems.push(<LogoutButton />)
            } else {
                setOpenModal(true)
            }
        }
    }, [isAuthenticated, authUser])

    return (
        <>
            <Typography className={'sticky title'}>

                <img src={Logo} width={75} height={75} style={{ backgroundColor: 'inherit', marginLeft: 20 }} />

                <Typography style={{ margin: 'auto auto', fontSize: '22px' }}>{settings.name}</Typography>

                {!openMenu && <MenuIcon onClick={openMenuModal} className="menu-btn" />}

                <Menu menuBody={optionsListItems} close={closeMenuModal} openMenu={openMenu} />

            </Typography>

            <AppModal open={openModal} children={<Typography>Only admin is able to login!</Typography>} close={closeModal} />
        </>
    )
}

export default Header;