import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from "react-router-dom";
import logo from './Volunteer.png'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
      <img src={logo} alt="Logo" className="navbar-logo" />
        <h1 className="logoo"> Organ Donation System</h1>
        
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/aboutus">About us</Link></li>
          <li><Link to="/donate">Donate</Link></li>
          <li><Link to="/">Logout</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;