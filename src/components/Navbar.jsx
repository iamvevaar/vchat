import React from 'react'
import AVATAR from "../assets/avatar.jpg"

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>VCHAT</span>
      <div className='user'>
        <img src={AVATAR} alt="" />
        <span>Gautam</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar