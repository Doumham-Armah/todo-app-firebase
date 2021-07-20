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

  //   sign up a new user
  function signup(email, password) {
    //   returns a promise
    return auth.createUserWithEmailAndPassword(email, password);
  }

  //   put in useEffect so it only runs once when the comp is mounted
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => setCurrentUser(user));

    return unsub;
  }, []);

  const value = {
    currentUser,
    signup,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
