import React from "react";
import "./TopNav.css";
import Logo from "../Sub Components/Logo";
import SearchBar from "../Sub Components/SearchBar";
import UserLogin from "../Sub Components/UserLogin";

function TopNav() {
  return (
    <>
      <div className="navbar">
        <Logo />
        <SearchBar />
        <UserLogin />
      </div>
    </>
  );
}

export default TopNav;
