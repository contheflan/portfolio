import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar(props) {
  return (
    <div className="navbar">
      <Link className="nav" to="/">
        <p>HOME</p>
      </Link>
      <Link className="nav" to="/portfolio">
        <p>PORTFOLIO</p>
      </Link>
      <Link className="nav" to="/about">
        <p>ABOUT</p>
      </Link>
      <Link className="nav" to="/contact">
        <p>CONTACT</p>
      </Link>
    </div>
  );
}

export default NavBar;