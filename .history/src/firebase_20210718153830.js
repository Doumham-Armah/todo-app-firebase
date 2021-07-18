import firebase from "firebase";
require("dotenv").config();

// const firebaseConfig = {
//   apiKey: "AIzaSyC1oCE3OCJ6yJHWpI4ZUM--xiOQKgzplh0",
//   authDomain: "to-do-app-20533.firebaseapp.com",
//   databaseURL: "https://to-do-app-20533-default-rtdb.firebaseio.com",
//   projectId: "to-do-app-20533",
//   storageBucket: "to-do-app-20533.appspot.com",
//   messagingSenderId: "351031111838",
//   appId: "1:351031111838:web:f427e7577fd6a37dec0b8f",
//   measurementId: "G-PDMMVPGVQX",
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "to-do-app-20533.firebaseapp.com",
  databaseURL: "https://to-do-app-20533-default-rtdb.firebaseio.com",
  projectId: "to-do-app-20533",
  storageBucket: "to-do-app-20533.appspot.com",
  messagingSenderId: "351031111838",
  appId: "1:351031111838:web:f427e7577fd6a37dec0b8f",
  measurementId: "G-PDMMVPGVQX",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
