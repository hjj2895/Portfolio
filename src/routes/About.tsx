import React from 'react'
import ProfilePic from '../assets/aboutpic.jpg'
import Skills from '../components/Skills'
import AboutPic from '../assets/aboutpic.jpg'

const About = () => {

  return (
    <section className='text-center h-[790px] w-full bg-custom-aqua bg-custom-gradient' id="about" >
      <div className='ml-0 lg:ml-[265px] flex flex-col'>
          <h1 className='text-[60px] text-white'>About Me</h1>
          <br/>
        <div className='flex flex-col items-center -mt-[30px] sm:-mt-0'>
          {/* <div className='flex justify-center items-center md:flex md:flex-col'> */}
          <img src={AboutPic} alt='about-pic' className='w-80 h-80 rounded-full hidden sm:block'/>
          <p className='text-xl text-custom-blurple whitespace-normal w-full sm:w-4/5 mt-4'>Hello, my name is Peter Ji. I am a full stack developer transitioned from Athletic Training. During my time as an Athletic Trainer, I had the privilege of working as an integral part of a collaborative team, an experience that significantly contributed to my growth as a proficient team player.
          Building on my background in Athletic Training, I have embarked on a transformative journey towards becoming a Software Engineer. The joy of solving complex problems and the continuous pursuit of acquiring new skills have fueled my determination, resilience, and ability to learn quickly. I am continually dedicated to refining my skills and making meaningful contributions to the dynamic and ever-evolving technology industry. 
           </p>
           </div>
          <br />
          <div className='flex flex-col -mt-[25px] sm:-mt-0'>
        <span className='text-[35px] text-white'>Let's work together!</span>
         <span className='text-2xl bg-gradient-text text-transparent bg-clip-text cursor-pointer -mt-[10px]'>My Resume</span>
         </div>
        {/* </div> */}
      </div>
    </section>
  )
}

export default About