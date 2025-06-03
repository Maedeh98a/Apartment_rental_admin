import React from 'react'
import {Link} from "react-router-dom";

function Footer() {
  return (
    <div className='footer'>
      <section className="footer-links">
        <a href='https://github.com/Maedeh98a/Apartment_rental_admin.git'>Our project</a>
        <Link to='/about'> About us </Link>
        <Link to='/about'> Contact us </Link>
        <Link to='/add-apartment'> Add new apartment </Link>
        </section>
    </div>
  )
}

export default Footer