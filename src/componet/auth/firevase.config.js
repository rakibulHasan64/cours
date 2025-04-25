import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz-Wu80Lun0TiLUE14-MooksG_VzZsvIs",
  authDomain: "cours-web-24c41.firebaseapp.com",
  projectId: "cours-web-24c41",
  storageBucket: "cours-web-24c41.firebasestorage.app",
  messagingSenderId: "349927081953",
  appId: "1:349927081953:web:3ab6d4724cea1ea1ae74a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
