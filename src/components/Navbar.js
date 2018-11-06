import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav style={{background: 'rgba(255,255,255,0.95)'}} className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src={logo} alt="BMCC Programming Club" style={{ width: '100%', maxHeight: '100%', paddingTop: '7px' }} />
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/events">
          Events
        </Link>
        <Link className="navbar-item" to="/contact-us">
          Contact Us
        </Link>
      </div>
      <div className="navbar-end">
        <div className="navbar-item" style={{fontSize: 'calc(10px + 0.5vmax)'}}>
            <strong>Wednesdays - 2:00 pm to 4:00 pm - Fiterman F707</strong>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
