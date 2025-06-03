import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
      <section className='nav-logo'>
        <Link to="/">
        <img src="../src/assets/Airbnb.png" className="logo" alt="logo"/>
         </Link>
        <h3>Airbnb</h3>
        </section>
        
        <section className="nav-links">
       
        <Link to='/about'> About us </Link>
        <Link to='/about'> Contact us </Link>
        <Link to='/add-apartment'> Add new apartment </Link>
          </section>
          {/* <br id='nav-line'/>  */}
    </nav>
    
  )
}

export default Navbar