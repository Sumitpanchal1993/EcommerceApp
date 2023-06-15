import React from 'react'
import { Link } from 'react-router-dom'
import './LeftNav.css'
import Logo from '../Images/icons8-example-48.png'



const menuList = [
  { title: 'Dashboard', icon: 'dashboard', link: '/' },
  { title: 'All Products', icon: 'deployed_code', link: 'allproduct' },
  { title: 'Orders', icon: 'home_storage', link: '/order' },
  { title: 'Favorite', icon: 'favorite', link: '/favourite' },
  { title: 'New Arrivals', icon: 'verified', link: '/newarrivals' }
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
                <Link to={item.link}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <p>{item.title}</p>
                </Link>
              </div>
            )
          })}

        </div>
      </nav>

    </>
  )
}

export default LeftNav
