// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCXQJRsprcrFzFfh_gocSSmRawP7WP9oU",
    authDomain: "cryptotrix-872e2.firebaseapp.com",
    projectId: "cryptotrix-872e2",
    storageBucket: "cryptotrix-872e2.appspot.com",
    messagingSenderId: "169520885964",
    appId: "1:169520885964:web:3b43db443a16b901cd5269"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;