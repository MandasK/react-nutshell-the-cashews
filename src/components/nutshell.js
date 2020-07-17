import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./auth/login";
import ApplicationViews from './ApplicationViews';



const Nutshell = (props) => {

    const isAuthenticated = () => {
      if (
        sessionStorage.getItem("credentials") !== null ||
        localStorage.getItem("credentials") !== null
      ) {
        return true;
      } else {
        return false;
      }
    };
    const [hasUser, setHasUser] = useState(isAuthenticated());
    const setUser = (user) => {
        sessionStorage.setItem("activeUser", JSON.stringify(user));
        setHasUser(isAuthenticated())
     }
     const clearUser = () => {
       sessionStorage.clear();
       localStorage.clear();
       setHasUser(isAuthenticated());
     };
    
    return (
        <>
          <ApplicationViews setUser={setUser} hasUser={hasUser} />
          <Login setUser={setUser}  {...props} />
        </>
    )
}

export default Nutshell