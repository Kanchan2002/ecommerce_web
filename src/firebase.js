import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDAOqC777mv3Q1t9O3M6MEJvzT7eQzghLI",
  authDomain: "fir-auth-1132-e2026.firebaseapp.com",
  projectId: "fir-auth-1132-e2026",
  storageBucket: "fir-auth-1132-e2026.appspot.com",
  messagingSenderId: "64116719646",
  appId: "1:64116719646:web:c17e6e9bbdb00128296e0f",
  measurementId: "G-M5WNTDRLLP"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {auth,app};