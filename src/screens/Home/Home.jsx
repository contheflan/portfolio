import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
function Home(props) {
  return (
    <div className="home-container">
      <div className="home-text-container">
        <div className="home-info-container">
        <p>CONNOR MCKENNA</p>
        <p>WEB DEVELOPER</p>
        </div>
        <div className="home-nav-container">
          <Link to="/Portfolio">
          <a className="enter" alt="enter">EXPLORE</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;