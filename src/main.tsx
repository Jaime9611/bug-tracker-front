import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import SidebarProvider from '@contexts/sidebar.context';
import './assets/fonts/Poppins-Bold.ttf';
import './assets/fonts/Poppins-Regular.ttf';
import './index.css';
import App from './app';
import { ThemeConfig } from './config/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SidebarProvider>
      <BrowserRouter>
        <ThemeConfig>
          <App />
        </ThemeConfig>
      </BrowserRouter>
    </SidebarProvider>
  </React.StrictMode>
);
