import React from 'react';
import './About.css';
import picture from "../../assets/picture.jpg"

function About() {
  return (
    <div className="about-me">
      <div className='about-me-container'>
        <section className="about-column about-column-a">
          <img alt='' className='profile-pic' src={picture}/>
        </section>
        <section className="about-column">
          <p id='aboutme-text'>I am a Television Broadcast Producer turned Software Engineer. I have a distinct eye for design and I know what works with a successful site. I changed career paths to a more hands-on creative role because I love taking fun ideas and turning them into unique creations. Ask me about my love of the 80's fantasy aesthetic.
          </p>
          <div className='resume-button-container'>
            <a className='resume-button' rel="noreferrer" target="_blank" href='https://drive.google.com/file/d/1ELqkHVirwjkyI6JMCCtxENl9QHn9eRg_/view?usp=sharing'>RESUME</a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;