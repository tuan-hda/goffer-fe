import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyADJrGN-uGW-aZODUo1eQWAUB-oBOC_MZo",
  authDomain: "goffer-3ce5c.firebaseapp.com",
  projectId: "goffer-3ce5c",
  storageBucket: "goffer-3ce5c.appspot.com",
  messagingSenderId: "307735905748",
  appId: "1:307735905748:web:2d2fb938b1014afd970241",
  measurementId: "G-58T506V3Y7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);