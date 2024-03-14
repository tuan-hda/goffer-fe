import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import QueryProvider from './components/providers/QueryProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryProvider>
                <App />
            </QueryProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
