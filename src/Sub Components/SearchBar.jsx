import React from "react";
import './SearchBar.css'



function SearchBar() {
  return (
    <>
      <div className="search">
        <input type="text" name="" id="" placeholder="Search here"  onChange={(e)=>{console.log(e.target.value)}}/>
        <button onClick={()=>alert('I am Search ')}><span className="material-symbols-outlined">search</span></button>
      </div>
    </>
  );
}





export default SearchBar;
