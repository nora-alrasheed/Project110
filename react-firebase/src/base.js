import * as firebase from "firebase"

const db = firebase.initializeApp({
    apiKey: "AIzaSyB5vMxwAgpBoclRdXmTipHPbxV35K-n3rQ",
    authDomain: "cse110firebase-aebb6.firebaseapp.com",
    databaseURL: "https://cse110firebase-aebb6.firebaseio.com",
    projectId: "cse110firebase-aebb6",
    storageBucket: "cse110firebase-aebb6.appspot.com",
    messagingSenderId: "260171520693",
    appId: "1:260171520693:web:a5667594a229df097efcfc",
    measurementId: "G-L66QC3T1VC"
});

export const provider2 = new firebase.auth.GoogleAuthProvider()
export default db;
export const provider = new firebase.auth.FacebookAuthProvider();