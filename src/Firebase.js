import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6Tmn6ihDgfxyQmMJimA1qorhq0qmIc-U",
    authDomain: "clone-534c2.firebaseapp.com",
    projectId: "clone-534c2",
    storageBucket: "clone-534c2.appspot.com",
    messagingSenderId: "896395852824",
    appId: "1:896395852824:web:6a4f0a591700b32516576d",
    measurementId: "G-G2K7B9910B"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
