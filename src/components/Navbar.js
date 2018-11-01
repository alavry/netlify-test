import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="BMCC Programming Club" style={{ width: '100%', 'max-height': '100%', 'padding-top': '7px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/contact-us">
          Contact Us
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
