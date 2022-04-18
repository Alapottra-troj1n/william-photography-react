// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH-rL1t7wig85i_dQICeZVDUdAdGbohVM",
  authDomain: "william-photography.firebaseapp.com",
  projectId: "william-photography",
  storageBucket: "william-photography.appspot.com",
  messagingSenderId: "378866457200",
  appId: "1:378866457200:web:3f68f5bc266f491a4cf2b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;