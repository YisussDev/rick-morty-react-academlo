import React from 'react'
import './NavBar.css'

const NavBar = ({goHome}) => {

  return (
    <div className='NavBar'>
      <img src="./images/NavBar/logo.png" alt="" onClick={goHome}/>
    </div>
  )
}

export default NavBar