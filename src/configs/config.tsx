export default {
    BACKEND_BASE_URL: import.meta.env.VITE_BACKEND_BASE_URL || 'http://localhost:3000',
    BACKEND_VERSION: import.meta.env.VITE_BACKEND_VERSION || 'v1',
    GOOGLE_CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    GOOGLE_ACCOUNT_API_BASE_URL: 'https://www.googleapis.com/oauth2/v2/userinfo',
    STRIPE_PUBLISHABLE_KEY: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY,
    STREAM_KEY: import.meta.env.VITE_STREAM_KEY || 'nr6fjqx6h2cz',
    STREAM_APP_ID: import.meta.env.VITE_STREAM_APP_ID,
    RAPID_API_KEY: import.meta.env.VITE_RAPID_API_KEY,
};
