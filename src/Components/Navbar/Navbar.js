import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='Navbar'>
      
      <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
      <a className='tv' href=''>TV Shows</a>
      <a className='movies' href='#mov'>Films</a>
      <a className='recents' href=''>Recently Added</a>
      <a className='mylist' href=''>Your List</a>
      <i class="fa-solid fa-magnifying-glass"></i>
      
      <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
      
    </div>
  )
}

export default Navbar
