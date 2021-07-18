import firebase from "firebase";

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
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORRAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
