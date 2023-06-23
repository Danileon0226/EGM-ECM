// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIW9ZO_eQbpIXIYgyTEnBwFfS7vv1D4c8",
  authDomain: "react-9a54f.firebaseapp.com",
  projectId: "react-9a54f",
  storageBucket: "react-9a54f.appspot.com",
  messagingSenderId: "86819465008",
  appId: "1:86819465008:web:86396b5f17e8ef1ef90af5",
};

// Initialize Firebase
const FirebaseApp = firebase.initializeApp(firebaseConfig);
const db = FirebaseApp.firestore();

export default db;
