import React from 'react'
import './TopNav.css'
import Logo from '../Images/icons8-example-96.png'
import UserLogo from '../Images/Userlogo.jpg'

function TopNav() {
    return (
        <>
            <header>
                <div className='topLogo'>
                    <img src={Logo} alt="logo" />
                    <h4>A.T.Inks</h4>
                </div>
                <div className="search flexcen">
                    <input type="text" name="" id="" placeholder='Search here' />
                    <span className="material-symbols-outlined">search</span>
                </div>
                <div className='headerRHS'>
                    <div className='flexcen'>
                        <img src={Logo} alt="logo" />
                        <span className="material-symbols-outlined">arrow_drop_down</span>
                    </div>
                    <img src={UserLogo} alt="" />

                    <div className='flexcen'>
                    <div className='userDetail'>
                        <h4>User Admin</h4>
                        <p>sumitpanchal08@gmail.com</p>
                    </div>
                    <span className="material-symbols-outlined">arrow_drop_down</span>
                    </div>

                </div>
            </header>
        </>
    )
}

export default TopNav
