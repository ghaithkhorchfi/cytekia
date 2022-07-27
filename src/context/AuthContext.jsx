/** @format */

import React, { useState } from "react";

export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  let signIn = () => {
    setUser("hello");
    setIsLogged(true);
  };
  let signOut = () => {
    setUser(null);
    setIsLogged(false);
  };
  let value = { signIn, signOut, user, isLogged };
  return <AuthContext.Provider value={true}>{children}</AuthContext.Provider>;
};
