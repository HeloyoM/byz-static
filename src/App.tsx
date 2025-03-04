import React from 'react';
import i18next from 'i18next'
import { composeInitialProps, initReactI18next } from 'react-i18next'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Typography } from '@mui/material';
import Profile from 'pages/Profile';
import Gallery from 'pages/Gallery';
import Home from 'pages/Home';
import ScreenWrapper from 'components/ScreenWrapper';
import Header from 'components/Header';
import AppUserContext from 'contexes/AppUserContext';
import './App.css';
import { AppDirectionContext } from 'contexes/languages-context';
import { Langs } from 'enum/Langs.enum';
import { he } from './i18n/languages/index';

export const inisializeI18n = (lang: string) => {
  i18next.use(initReactI18next).init({
    lng: lang,
    fallbackLng: Langs.en,
    debug: false,
    resources: {
      en: {
        // translation: en,
      },
      he: {
        translation: he,
      },
    }
  })
}

const lang = Langs.he
inisializeI18n(lang)

const App: React.FC = () => {
  const [isRtlDirection, setDirection] = React.useState<boolean>(true);
  const [crrUser, setUser] = React.useState<any>(null);

  const updateUserContext = (user: any) => { setUser(user) }
  console.log({ crrUser })
  const toggleDirection = (isRtl: boolean) => setDirection(isRtl);
  return (
    <AppDirectionContext.Provider value={{ isRtlDirection, toggleDirection }}>
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
      </AppUserContext.Provider>
    </AppDirectionContext.Provider>
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