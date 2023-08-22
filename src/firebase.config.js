// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAalsduNZLIhL3hcKiE5dGLRVCpunzyH3Q",
  authDomain: "react-firebase-todo-s3-2023.firebaseapp.com",
  projectId: "react-firebase-todo-s3-2023",
  storageBucket: "react-firebase-todo-s3-2023.appspot.com",
  messagingSenderId: "1099179606297",
  appId: "1:1099179606297:web:217d1a9e3f92830f420588"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);