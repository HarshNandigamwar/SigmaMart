import React, { createContext, useContext, useState, useEffect } from "react";
// importing from firebase.js
import { auth } from "../firebase";
// importing from firebase
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// import from components
import BrandLoader from "../Components/LoaderComponents/NormalLoaderComponents/BrandLoader";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  //  Email/Password Login Function
  const emailPasswordSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //  Logout Function
  const logout = () => {
    return signOut(auth);
  };
  // Google Login Function
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      return result.user;
    } catch (error) {
      console.error("Google Sign-in Error:", error.code, error.message);
      throw error;
    }
  };
  //  Sign Up Function
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const value = {
    currentUser,
    loading,
    signUp,
    googleSignIn,
    emailPasswordSignIn,
    logout,
  };

  // Jab tak loading ho rahi hai, screen par loader show hoga.
  if (loading) return <BrandLoader />;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
