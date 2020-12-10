import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio(props) {
  return (
      <div className='portfolio'>
        <div className='portfolio-title-container'>
        <h1 className='portfolio-title'>PORTFOLIO</h1>
        <h3 className="portfolio-undertitle">Here's a sample of projects I've worked on!</h3>
        </div>
          <div className="projects-container">
            {props.listProjects &&
              <div className="project">
              {props.listProjects.map((project) =>
                <Link className='project-link' to={`/portfolio/${project.fields.name}`}>
                  <div className='project-img' style={{ backgroundImage: `url(${project.fields.thumbnail})` }}>
                    <div className='project-info-container'>
                      <p className='project-info'>{project.fields.name}</p>
                    </div>
                  </div>
                </Link> 
                )}
              </div>
            }
          </div>
      </div>
  );
}

export default Portfolio;