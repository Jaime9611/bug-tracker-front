import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './assets/fonts/Poppins-Bold.ttf';
import './assets/fonts/Poppins-Regular.ttf';
import './index.css';
import App from './app';
import { ThemeConfig } from './config/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeConfig>
        <App />
      </ThemeConfig>
    </BrowserRouter>
  </React.StrictMode>
);
