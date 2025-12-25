// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_WlfzaM23H7KIPD6epBarIiswzKbzevk",
    authDomain: "bingegpt-34d8b.firebaseapp.com",
    projectId: "bingegpt-34d8b",
    storageBucket: "bingegpt-34d8b.firebasestorage.app",
    messagingSenderId: "544338281304",
    appId: "1:544338281304:web:c8e678191e2d3157df1b2d",
    measurementId: "G-8LY26EVC57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();