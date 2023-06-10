// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBv2kIHsgCz75ahkSvlJmHITPqPKc6nMI",
    authDomain: "graphic-design-school.firebaseapp.com",
    projectId: "graphic-design-school",
    storageBucket: "graphic-design-school.appspot.com",
    messagingSenderId: "12893025386",
    appId: "1:12893025386:web:bfccad5dd725c21c3f4613"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;