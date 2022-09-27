// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    signOut,
    getAuth,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7xSOZcjf1INurkiMIfJJ5Vs5vX8591gI",
    authDomain: "fantasies-a-poetry-escape.firebaseapp.com",
    projectId: "fantasies-a-poetry-escape",
    storageBucket: "fantasies-a-poetry-escape.appspot.com",
    messagingSenderId: "704103205533",
    appId: "1:704103205533:web:564fad259b1227eb69a274"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize auth object
const auth = getAuth(app);

// Config our provider
const provider = new GoogleAuthProvider();

// set up login function
function login() {
    return signInWithPopup(auth, provider)
}

// set up logout function
function logout() {
    return signOut(auth)
}

// export our functionality to be used within our components
export { auth, login, logout };