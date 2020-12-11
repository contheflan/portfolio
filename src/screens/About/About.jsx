import React from 'react';
import './About.css';
import picture from "../../assets/picture.jpg"
import skeleton from "../../assets/skeleton.gif"

function About(props) {
  return (
    <div className="about-me">
      <div className='about-me-container'>
        <section className="about-column about-column-a">
          <img alt='' className='profile-pic' src={picture}/>
        </section>
        <section className="about-column">
          <p id='aboutme-text'>I am a Television Broadcast Producer turned Software Engineer. I have a distinct eye for design and I know what works with a successful site. I changed career paths to a more hands-on creative role because I love taking fun ideas and turning them into unique creations. Ask me about my love of the 80's fantasy aesthetic.
          </p>

          <div className='big-button-container resume'>
            <button className='big-button' rel="noreferrer" target="_blank" href='https://docs.google.com/document/d/18faKWW30olJI3a4_Fj7JeOn5j1KDGRQIgQwUaJfrl2A/edit?usp=sharing'>RESUME</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;