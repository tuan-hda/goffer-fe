import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import QueryProvider from '@/providers/QueryProvider';
import config from './configs/config';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ChatProvider from './providers/ChatProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryProvider>
                <GoogleOAuthProvider clientId={config.GOOGLE_CLIENT_ID}>
                    <ChatProvider>
                        <App />
                    </ChatProvider>
                </GoogleOAuthProvider>
            </QueryProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
