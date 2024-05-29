export default {
    BACKEND_BASE_URL: import.meta.env.VITE_BACKEND_BASE_URL || 'http://localhost:3000',
    BACKEND_VERSION: import.meta.env.VITE_BACKEND_VERSION || 'v1',
    GOOGLE_CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    GOOGLE_ACCOUNT_API_BASE_URL: 'https://www.googleapis.com/oauth2/v2/userinfo',
    STRIPE_PUBLISHABLE_KEY: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY,

    CHAT_HOST: import.meta.env.CHAT_HOST || 'http://localhost:3002',
    CHAT_URL: import.meta.env.CHAT_URL || 'http://localhost:3002/api/v1',
    CHAT_SSL: import.meta.env.CHAT_SSL || false,
};
