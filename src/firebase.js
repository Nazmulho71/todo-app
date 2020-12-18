import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCt6a5bpzTpvcan4GIihaT5zXBTKhggRUc",
  authDomain: "todo-app-38c79.firebaseapp.com",
  projectId: "todo-app-38c79",
  storageBucket: "todo-app-38c79.appspot.com",
  messagingSenderId: "855846061828",
  appId: "1:855846061828:web:cba2b2fdb9780dc6f73251",
  measurementId: "G-JM9WLXGQBV",
});

const db = firebaseApp.firestore();

export default db;
