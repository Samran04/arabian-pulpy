"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { 
  auth, 
  googleProvider, 
  isFirebaseConfigured 
} from "../lib/firebase";
import { 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "firebase/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isFirebaseConfigured && auth) {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
        setLoading(false);
      });
      return unsubscribe;
    } else {
      setLoading(false);
    }
  }, []);

  const signInWithGoogle = async () => {
    if (!isFirebaseConfigured || !auth) {
      throw new Error("Firebase Auth is not configured. Add credentials to .env.local");
    }
    return await signInWithPopup(auth, googleProvider);
  };

  const loginWithEmail = async (email, password) => {
    if (!isFirebaseConfigured || !auth) {
      throw new Error("Firebase Auth is not configured. Add credentials to .env.local");
    }
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const signupWithEmail = async (email, password) => {
    if (!isFirebaseConfigured || !auth) {
      throw new Error("Firebase Auth is not configured. Add credentials to .env.local");
    }
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    if (isFirebaseConfigured && auth) {
      await signOut(auth);
    }
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        loading,
        signInWithGoogle,
        loginWithEmail,
        signupWithEmail,
        logout,
        isFirebaseConfigured,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
