import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebaseConfig';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);
export const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
			console.log(user);
    })
  }, [])

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  }

  const logout = () => auth.signOut();


  const value = {
    currentUser,
    login,
    logout  
  };
  return (
    /* eslint-disable react/prop-types */
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}