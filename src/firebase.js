// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZvTjvKvG5zYF6htIu5ijLLCtAG_2ZUy0",
    authDomain: "firstapp-c5461.firebaseapp.com",
    projectId: "firstapp-c5461",
    storageBucket: "firstapp-c5461.appspot.com",
    messagingSenderId: "560344769805",
    appId: "1:560344769805:web:61e41cbb93efe3a50e3c44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth = app.auth;

export const auth = getAuth(app);

const useAuth = () => {
    return { auth }; // Return the auth object
  };
export {useAuth};  

export default app;