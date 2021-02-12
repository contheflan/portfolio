import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio(props) {
  let i = 1;
  return (
      <>
        <div className="portfolio-container">
        <div className="projects-container">
            <p>Here's a sample of my work!</p>
            {props.listProjects &&
            <div className="projects">
              {props.listProjects.map((item) =>
                <Link key={item.fields.id} className="project-link" to={`/portfolio/${item.fields.name}`}>
                  <div className='project-img' style={{ backgroundImage: `url(${item.fields.thumbnail}`}}>
                    <div className='project-info-container'>
                      <p className='project-info'>{item.fields.name}</p>
                    </div>
                  </div>
                </Link> 
                )}
              </div>
            }
          </div>
        </div>
      </>
  );
}

export default Portfolio;