import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <GoogleOAuthProvider clientId="734653271878-dlrb5umuqm2g9nb3lp88e7c3rcf2j65m.apps.googleusercontent.com"> */}
    <Auth0Provider
      domain="dev-4jb37adw774rzacm.us.auth0.com"
      clientId="JGfv5r647ow3sI7MCJ0lMnzPM9a3SvYg"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
    {/* </GoogleOAuthProvider> */}
  </React.StrictMode>
);

reportWebVitals();
