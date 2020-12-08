import React from 'react';
import LinkedIn from '../../assets/linkedin.png';
import Github from '../../assets/github-white.png';
import './Footer.css'

function Footer(props) {
  return (
    <div className='footer'>
      <p className='footer-text'>LET'S CONNECT:</p>
      <div className='footer-icon-container'>
      <a rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/connormckenna2654/'><img className='footer-icon' alt="linkedin" src={LinkedIn} /></a>
      <a rel="noreferrer" target="_blank" href='https://github.com/contheflan/'><img className='footer-icon' alt="github" src={Github}/></a>
      </div>

    </div>
  );
}

export default Footer;