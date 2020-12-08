import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './AboutMe.css';
import ProfilePic from '../../assets/picture.jpg'
import Footer from '../../components/Footer/Footer';

function AboutMe(props) {
  return (
    <div >
      <NavBar />
      <div className="about-me">
        <h2 className='proj-name'>ABOUT ME</h2>

        <div className='about-me-container'>
          <section className="about-column about-column-a">
            <img alt='' className='profile-pic' src={ProfilePic}/>
          </section>
          <section className="about-column">
            <p id='aboutme-text'>Event Specialist turned Junior Developer, I'm looking to bring my passion of creating
            great experiences to the tech industry through web development. In my previous roles, I
            had the opportunity to manage large projects which allowed me to collaborate with a wide
            range of teams and build many positive interpersonal connections. As someone who’s always
            worked in a fast paced environment, problem solving quickly with an optimistic demeanor
            has always been one of my best attributes and I’m excited to bring this quality and more
            to my next role.
            </p>

            <div className='details-button-container'>
              <a className='details-button-containers resume-button' rel="noreferrer" target="_blank" href='https://docs.google.com/document/d/1eapdjCbebQLIxAqD7bIRwjFEvTmpypHNPTpRZ6EqhOY/export?format=pdf'>RESUME</a>
              <br></br>
            </div>
          </section>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default AboutMe;