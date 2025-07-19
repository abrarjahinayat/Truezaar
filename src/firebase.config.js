// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6J3T9EJVHXNcY2qpH3XSMAY09JywhUOw",
  authDomain: "truezaar.firebaseapp.com",
  projectId: "truezaar",
  storageBucket: "truezaar.firebasestorage.app",
  messagingSenderId: "415236580090",
  appId: "1:415236580090:web:fc78dd4affe10a81d3df43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app}
export {auth}