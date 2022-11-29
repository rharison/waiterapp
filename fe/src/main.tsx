import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import Auth from './context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <Auth>
      <App />
    </Auth>
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
