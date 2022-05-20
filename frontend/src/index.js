import react from 'react';
import reactDOM from 'react-dom';

import App from './App';

import { Auth0Provider } from '@auth0/auth0-react';

reactDOM.render(
    <Auth0Provider 
      domain='gianpetri.us.auth0.com' 
      clientId='z8PQMMqFlBKkYhEkGk0QIzXLII0Tbghr' 
      redirectUri={'http://localhost:3000/hacklist'}
    >
        <App />
    </Auth0Provider>, 
    document.getElementById('root'));

