import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
function Home(props) {
  return (
    <div className="home-container">
      <div className="home-text-container">
        <div className="home-info-container">
        <p>Connor McKenna</p>
        <p>Software Engineer</p>
        </div>
        <div className="home-nav-container">
          <Link to="/Portfolio">
          <a className="enter" alt="enter">ENTER</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;