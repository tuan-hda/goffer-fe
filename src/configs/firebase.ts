// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyADJrGN-uGW-aZODUo1eQWAUB-oBOC_MZo',
    authDomain: 'goffer-3ce5c.firebaseapp.com',
    projectId: 'goffer-3ce5c',
    storageBucket: 'goffer-3ce5c.appspot.com',
    messagingSenderId: '307735905748',
    appId: '1:307735905748:web:2d2fb938b1014afd970241',
    measurementId: 'G-58T506V3Y7',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
