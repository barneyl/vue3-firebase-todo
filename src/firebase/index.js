// Replacing all double quotes with single quotes
// Don't need semicolons either:

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

// Import Firebase - get this from docs for latest version:
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKLlG9PF4_sE0nxRY_1pFRHqas6TxCc2U",
  authDomain: "b-todo-808ee.firebaseapp.com",
  projectId: "b-todo-808ee",
  storageBucket: "b-todo-808ee.appspot.com",
  messagingSenderId: "1039388490101",
  appId: "1:1039388490101:web:172c4091dfe0ab98f93b3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Now add export so we can use this anywhere in our app:
export {
    db
};
