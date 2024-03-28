import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src='' alt='' className='logo' />
        <ul>
            <li><a href="#">Home</a></li>
        </ul>

        <div className='search-box'>
            <input type='text' placeholder='Search' />
            <img src='' alt='' />
        </div>

    </div>
  )
}

export default Navbar