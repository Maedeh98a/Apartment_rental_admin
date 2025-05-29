import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
      
        <Link to="/">
        <img src="../src/assets/Airbnb.png" className="logo" alt="logo"/>
         </Link>
        <h3>Airbnb</h3>
       
          
          <br id='nav-line'/> 
    </nav>
    
  )
}

export default Navbar