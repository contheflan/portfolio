import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio(props) {
  return (
      <div className='portfolio'>
        <div className='portfolio-title-container'>
        <h1 className='portfolio-title'>PORTFOLIO</h1>
        <h3 className="portfolio-undertitle">Here's a sample of projects I've worked on!</h3>
        <div>
          {props.listItems &&
            <div className="thumbnail-container">
            {props.listItems.map((item) =>
              <Link className='portfolio-link' to={`/portfolio/${item.fields.name}`}>
                <div className='thumbnail-images' style={{ backgroundImage: `url(${item.fields.thumbnail})` }}>
                  <div className='thumbnail-text-container'>
                    <p className='thumbnail-text'>{item.fields.name}</p>
                  </div>
                </div>
              </Link>   
              )}
            </div>
          }
        </div>
      </div>
      </div>
  );
}

export default Portfolio;