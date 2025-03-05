import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Typography } from '@mui/material';
import Profile from 'pages/Profile';
import Gallery from 'pages/Gallery';
import Home from 'pages/Home';
import ScreenWrapper from 'components/ScreenWrapper';
import Header from 'components/Header';
import AppUserContext from 'contexes/AppUserContext';
import AppServerMsgContext from "./contexes/AppServerMsg";
import './App.css';
import AppToast from 'components/common/AppToast';

const App: React.FC = () => {
  const [crrUser, setUser] = React.useState<any>(null);
  const [serverMsg, setServerMsg] = React.useState('');

  const updateUserContext = (user: any) => { setUser(user) }
  console.log({ crrUser })

  const updateServerMsgContext = (msg: any) => { setServerMsg(msg) }
  return (
    <AppServerMsgContext.Provider value={{ updateServerMsgContext, serverMsg }}>
      <AppUserContext.Provider value={{ updateUserContext, user: crrUser }}>
        <Router>
          <ScreenWrapper><Header /></ScreenWrapper>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </Router>

        <AppToast />

      </AppUserContext.Provider>
    </AppServerMsgContext.Provider>
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