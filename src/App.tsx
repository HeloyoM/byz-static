import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, IconButton, Typography } from '@mui/material';
import Profile from 'pages/Profile';
import Gallery from 'pages/Gallery';
import Home from 'pages/Home';
import ScreenWrapper from 'components/ScreenWrapper';
import Menu from 'components/common/Menu';
import { IListItem } from 'interface/IListItem.interface';
import AppList from 'components/common/AppList';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './App.css';

const App: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const openMenuModal = () => { setOpenMenu(true) }
  const closeMenuModal = () => { setOpenMenu(false) }

  const optionsListItems: IListItem[] = [
    { primary: 'galery', handleClick: () => { }, secondary: '' },
    {
      primary: 'active', handleClick: () => { }, secondary: ''
    }
  ]

  return (
    <Router>
      {openMenu ? <CloseIcon className="menu-btn" onClick={closeMenuModal} /> : <MenuIcon onClick={openMenuModal} className="menu-btn" />}

      <Menu menuBody={<AppList items={optionsListItems} />} close={closeMenuModal} openMenu={openMenu} />

      <Routes>
        <Route path="/" element={<ScreenWrapper ><Home /></ScreenWrapper>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </Router>
  );
};

export default App;

export const NotFound: React.FC = () => {
  return (
    <Typography variant="h3" align="center" gutterBottom>
      Not found
    </Typography>
  )
}