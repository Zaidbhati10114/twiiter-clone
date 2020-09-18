import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp9IEh1UmrAlKA6BLuWvoUsL5RK0s-gko",
  authDomain: "twiiter-clone-b5dd3.firebaseapp.com",
  databaseURL: "https://twiiter-clone-b5dd3.firebaseio.com",
  projectId: "twiiter-clone-b5dd3",
  storageBucket: "twiiter-clone-b5dd3.appspot.com",
  messagingSenderId: "636591220450",
  appId: "1:636591220450:web:832f1cc92d747dec25e0bb",
  measurementId: "G-2MKZC3MMV2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
