import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(false);
  useEffect(() => {
    axios.post("http://localhost:3004/api/auth/user").then((res) => {
      console.log('AuthContext')
      if (res.data.email) {
        setIsLoggedIn(res.data);
      } else {
        setIsLoggedIn(null);
      }
    });
    // useEffect working on changes of user useState
  }, [user]);
  console.log(user)
  console.log(isLoggedIn)
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, setUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
