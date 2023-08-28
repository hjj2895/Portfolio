import React from 'react';
import './About.css'; 
import ProfilePic from '../assets/aboutpic.jpg'
import Skills from '../components/Skills';

const About = () => {
  return (
    <div className='about-container'>
      <div className='header-container'>
    <div className='text-container'>
      <h1>About Me</h1>
      <br/>
      <img src={ProfilePic} alt="profile-pic" />
      <br />
      <p>I am a former Athletic Trainer turned web developer. With four years of experience as an Athletic Trainer in a high school setting,
        I have sharpened my critical thinking and problem solving skills when being under critical situations. Working in a team setting during those 
        years allowed me to grow as a proficient team player. 
      </p>
      <br/>
      <p>
        After these four years, I've decided to pursue my journey towards becoming a Software Engineer. My passion for coding has grown exponentially this past year which 
        comes from the joy of problem solving and learning new skills. My journey in coding has made me become more determined, relentless, a fast learner and
        more creative. I am always looking to honing my skills and contributing in the Tech Industry. 
      </p>
    </div>
    </div>
    <Skills />
    </div>
  )
}

export default About