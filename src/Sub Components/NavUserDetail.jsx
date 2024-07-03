import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartLogo from '../Media/Cart.png';
import { useSelector } from "react-redux";

function NavUserDetail({logout}) {
    const [userName, setUserName] = useState("Sumit");
    const [userID, setUserID] = useState("Sumitpanchal08");

    const cartItem = useSelector((state)=>{return state.redux_cart})


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
      <span className="material-symbols-outlined">account_circle</span>
      <div className="userDetail">
        <h4>{`Hi! ${userName}`}</h4>
        <p>{userID}</p>
      </div>
        <button className="dropdown_btn badge">
        <Link to= '/cart'>
            <img src={CartLogo} alt="" />
        </Link>
        {cartItem.length!==0 &&<span>{cartItem.length}</span>}
        </button>
      <button className="dropdown_btn" onClick={dropdown}>
        <span className="material-symbols-outlined">arrow_drop_down</span>

      </button>

      <div className="dropdown">
        <ul>
          <li>
            <Link to={"/myprofile"}>My Profile</Link>
          </li>
          <li>
            <Link to={"/myorder"}>Orders</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
          <li>
            <Link>Wishlist</Link>
          </li>
          <li>
            <Link
              onClick={() => {
                logout()
              }}
            >
              Log Out
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavUserDetail;
