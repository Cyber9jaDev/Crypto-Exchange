import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/navbar.css';
import logo from '../images/icon.png';

const Navbar = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <div className="logo-container">
          <NavLink to='/' className="navbar-brand"><img className='logo' src={logo} alt="" /></NavLink>
        </div>

        <div className="navbar-nav-container">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink 
                to='/cryptocurrencies' 
                className="nav-link"
                >
                Cryptocurrencies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to='/exchanges' 
                className="nav-link"
              >
                Exchanges
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to='/markets' 
                className="nav-link"
                >
                Markets
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to='/news' 
                className="nav-link"
                >
                News
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="signup-container">
          <NavLink to='/signup' className="nav-link sign-up">Sign Up</NavLink>
        </div>

        <div style={{display: 'none'}} className="mobile-menu">

        </div>
      </nav>
    </header>
  )
}

export default Navbar;
