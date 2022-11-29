import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { AuthProvider } from './context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <AuthProvider>
      <App />
    </AuthProvider>
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
