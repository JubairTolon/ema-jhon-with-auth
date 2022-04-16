// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFKMsi_9ajPIXQCFBTdtIlTkSf7fluVzk",
    authDomain: "ema-john-simple-89f81.firebaseapp.com",
    projectId: "ema-john-simple-89f81",
    storageBucket: "ema-john-simple-89f81.appspot.com",
    messagingSenderId: "66899435984",
    appId: "1:66899435984:web:3c664f6474120ee3a859d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;