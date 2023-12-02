import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'; // Assuming you have a logo image

const Header = () => {
  const styles = ({ isActive }) => ({
    textDecoration: isActive ? 'underline' : 'none',
  });

  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />
      <nav>
        <NavLink className="navlink" to="/home" styles={styles}>
          Home
        </NavLink>
        <NavLink className="navlink" to="/locations" styles={styles}>
          Top Locations
        </NavLink>
        <NavLink className="navlink" to="/signup" styles={styles}>
          Sign In
        </NavLink>
        <NavLink className="navlink" to="/register" styles={styles}>
          Register
        </NavLink>
        <NavLink className="navlink" to="/account" styles={styles}>
          My Account
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;




