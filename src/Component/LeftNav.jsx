import React from 'react'
import './LeftNav.css'
import Logo from '../Images/icons8-example-48.png'


const menuList = [
{ title: 'Dashboard', icon: 'dashboard', link: '/' },
{ title: 'All Products', icon: 'deployed_code', link: '/login' },
{ title: 'Orders', icon: 'home_storage', link: '/newemployeeregister' },
{ title: 'Favorite', icon: 'favorite', link: '/updatedetail' },
{ title: 'New Arrivals', icon: 'verified', link: 'settings' },
]

function LeftNav() {
    return (
        <>
            <nav>
                <div className='flexcen' id='logo'>
                    <img src={Logo} alt="logo" />
                    <h4>A.T. INKS</h4>
                </div>
                

                <div> 
                {menuList.map((item, index) => {
            return (
              <div className='menuopt' key={index} >
                <a href={item.link}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <p>{item.title}</p>
                </a>
              </div>
            )
          })}

                </div>
            </nav>

        </>
    )
}

export default LeftNav
