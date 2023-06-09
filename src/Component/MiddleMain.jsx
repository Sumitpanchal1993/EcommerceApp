import React from 'react'
import './MiddleMain.css'

function MiddleMain() {
  return (
    <div className='middle_top'>
      
      <div className='flexcen'>
      <span className="material-symbols-outlined">arrow_back</span>
        <h3>Print Heads</h3>
      </div>
      <div className='search flexcen'>
        <input type="text" name="" id="" />
        <span className="material-symbols-outlined">search</span>
        <div >
        <button className='flexcen mybtn'>
        <span class="material-symbols-outlined">filter_alt</span>
        <p>Filters</p>
        <span className="material-symbols-outlined">arrow_drop_down</span>
        </button>
        </div>
      </div>
    </div>
  )
}

export default MiddleMain
