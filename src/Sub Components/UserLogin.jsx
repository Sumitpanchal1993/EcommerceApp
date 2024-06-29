import React, { useState } from "react";
import "./UserLogin.css";
import { Link } from "react-router-dom";
import Model from "react-modal";
import Login from "../Pages/Login";

function UserLogin() {
  const [userName, setUserName] = useState("Sumit");
  const [userID, setUserID] = useState("Sumitpanchal08");
  const [userLogin, setUserLogin] = useState(false);
  const [loginpopup, setLoginPopup] = useState(false);

  const handleLogin = () => {
    setUserLogin(true);
    setLoginPopup(true)
  };


  const dropdown = ()=>{
    let status = document.querySelector('.dropdown')
    if (status.style.display == 'none'){
      status.style.display = 'block'
    }else{
      status.style.display = 'none'
    }

  }

  return (
    <>
      <div className="headerRHS">
        {userLogin ? (
          <>
            <span className="material-symbols-outlined">account_circle</span>
            <div className="userDetail">
              <h4>{`Hi! ${userName}`}</h4>
              <p>{userID}</p>
            </div>
            <button className="dropdown_btn" onClick={dropdown}>
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </button>
            <div className="dropdown">
              <ul>
                <li><Link to={'/myprofile'}>My Profile</Link></li>
                <li><Link to={'/myorder'}>Orders</Link></li>
                <li><Link to={"/cart"}>Cart</Link></li>
                <li><Link>Wishlist</Link></li>
                <li><Link onClick={()=>{setUserLogin(false);}}>Log Out</Link></li>                
              </ul>
            </div>
          </>
        ) : (
          <button className="mybtn" onClick={handleLogin}>
            Login
          </button>
        )}
      </div>
      {/* <Model isOpen={loginpopup}>
      <div className="model">
        <Login/>

      </div>
      </Model> */}
    </>
  );
}

export default UserLogin;
