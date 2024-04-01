import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import QueryProvider from '@/providers/QueryProvider';
import config from './configs/config';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryProvider>
                <GoogleOAuthProvider clientId={config.GOOGLE_CLIENT_ID}>
                    <App />
                </GoogleOAuthProvider>
            </QueryProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
