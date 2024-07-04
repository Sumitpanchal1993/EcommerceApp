import React, { useState } from "react";
import "./UserLogin.css";
import NavUserDetail from "./NavUserDetail";

function UserLogin() {
  const [userLogin, setUserLogin] = useState(false);

  const handleLogin = () => {
    setUserLogin(true);
  };

  const handleLogout = () => {
    setUserLogin(false);
  };

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
