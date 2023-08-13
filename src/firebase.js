// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 
  apiKey: REACT_API_KEY,
  authDomain: REACT_AUTH_DOMAIN,
  projectId: REACT_PROJECT_ID,
  storageBucket: REACT_STORAGE_BUCKET ,
  messagingSenderId: REACT_MESSAGING_SENDER_ID,
  appId:REACT_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getAuth(app)
export default app;
