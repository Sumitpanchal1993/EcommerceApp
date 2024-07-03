import React, { useState } from "react";
import "./UserLogin.css";
import { Link } from "react-router-dom";
// import Model from "react-modal";
// import Login from "../Pages/Login";
import NavUserDetail from "./NavUserDetail";

function UserLogin() {
  
  const [userLogin, setUserLogin] = useState(false);


  const handleLogin = () => {
    setUserLogin(true);
    // setLoginPopup(true);
  };

  const handleLogout =()=>{
    setUserLogin(false)
  }

  return (
    <>
      <div className="headerRHS">
        {userLogin ? (
          <NavUserDetail logout={handleLogout} />
        ) : (
          <button className="mybtn" onClick={handleLogin}>
            Login
          </button>
        )}
      </div>
    </>
  );
}

export default UserLogin;
