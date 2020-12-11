import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  return (
    <div className="home-container">
      <div className="home-info-container">
      <div className="home-text-container">
        <p>Connor McKenna</p>
        <p>Web Developer</p>
        </div>
        <div className="big-button-container">
          <Link to="/portfolio">
          <button href className="big-button" alt="explore">ENTER</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;