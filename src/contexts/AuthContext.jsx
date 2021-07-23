import React, { createContext, useContext, useEffect, useState } from "react";
// import firebase from "../firebase";
import { auth } from "../firebase";

// create context
const AuthContext = createContext();

// use context
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  //   sign up a new user
  function signup(email, password) {
    //   returns a promise
    return auth.createUserWithEmailAndPassword(email, password);
  }

  //   sign in an existing user
  function login(email, password) {
    //   returns a promise
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  //   put in useEffect so it only runs once when the comp is mounted
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsub;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
