import React from 'react';
import './HeroSection.css'; 
import HeroImg from '../assets/heroimg3.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Footer from './Footer';


const HeroSection = () => {
  
  return (
    <div className='hero'>
        <div className='background-img'>
        <img className='hero-img' src={HeroImg} alt="HeroImg" />
        </div>
        <div className='content'>
            <h1>Hi, I'm Peter</h1>
            <p>Full Stack Developer</p>
            <div className='btns'>
                <Link to="/projects" className='btn'>My Work</Link>
                <Link to="/contact" className='btn-light'>Let's Connect!</Link>
            </div>
            <div className='social-link'>
              <a href="https://www.linkedin.com/in/peter-ji/">
              <FontAwesomeIcon icon={faLinkedin} className='linkedin'></FontAwesomeIcon>
             </a>
             <a href="https://github.com/hjj2895">
              <FontAwesomeIcon icon={faGithub} className='github'></FontAwesomeIcon>
              </a>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default HeroSection