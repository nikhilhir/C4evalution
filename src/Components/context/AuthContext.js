import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const handleLogin = (email, password) => {
    //  api request to reqres.in for the token
    try {
      let res =  fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email,
          password
        })
      });
      let data =  res.json();
      setToken(data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleLogout = () => {
    //  set token back to " " once logged out
    setToken("");
  };

  const value = { handleLogin, token, handleLogout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
