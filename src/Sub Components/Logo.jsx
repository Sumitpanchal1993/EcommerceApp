import React from "react";
import { Link } from "react-router-dom";
import './Logo.css'

function Logo() {
  return (
    <>
      <div className="topLogo">
        <Link to='/' >
        <span className="material-symbols-outlined">Storefront</span>
        <h4>My Market</h4>
        </Link>
      </div>
    </>
  );
}
export default Logo;
