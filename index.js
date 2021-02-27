// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";


// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
    apiKey: "AIzaSyBy7LKaus1uwgpmWut0JoQprEUe_iyHSXw",
    authDomain: "portfolio-umg-new.firebaseapp.com",
    projectId: "portfolio-umg-new",
    storageBucket: "portfolio-umg-new.appspot.com",
    messagingSenderId: "451688427857",
    appId: "1:451688427857:web:063bbec878e5cd5ed52370",
    measurementId: "G-NL2TCVW2RH"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);