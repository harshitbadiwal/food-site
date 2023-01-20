import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserAuthContextProvider } from './Context/Authcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserAuthContextProvider >
    <App />
    </UserAuthContextProvider>
  
);

