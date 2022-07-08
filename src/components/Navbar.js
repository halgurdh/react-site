import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className='navBar'>
            <div className='navbar-container'>
            <Link to="/">Home</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar