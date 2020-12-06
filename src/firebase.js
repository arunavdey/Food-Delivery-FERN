import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDr_3rQgh_kuGQm1b33cV9gpEQHV0t19S4",
    authDomain: "food-del-d46f4.firebaseapp.com",
    projectId: "food-del-d46f4",
    storageBucket: "food-del-d46f4.appspot.com",
    messagingSenderId: "174292383333",
    appId: "1:174292383333:web:1f7925b59c455b9d94788c",
    measurementId: "G-MZQ63SP2SE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
