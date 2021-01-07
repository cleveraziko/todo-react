// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDmOw6_eGN-DLp3DkdPAVOZSaKhibbdkqc",
//   authDomain: "ikramov-todo-app.firebaseapp.com",
//   projectId: "ikramov-todo-app",
//   storageBucket: "ikramov-todo-app.appspot.com",
//   messagingSenderId: "498375404613",
//   appId: "1:498375404613:web:373b158a24563da384072c",
//   measurementId: "G-RSFED1F50J",
// };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB5SNk1y2FkklTd02jjAqDlQvpoVtKBuvo",
  authDomain: "aziko-todo-app.firebaseapp.com",
  projectId: "aziko-todo-app",
  storageBucket: "aziko-todo-app.appspot.com",
  messagingSenderId: "701505329252",
  appId: "1:701505329252:web:36435c36694ab174966771",
  measurementId: "G-LB0QS09KYF",
});

const db = firebaseApp.firestore();

export default db;
