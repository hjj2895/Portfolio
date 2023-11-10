import React from 'react'
import HeroImg from '../assets/heroimg3.jpg'
import { NavLink } from 'react-router-dom'
import ProfilePic from '../assets/profilePic.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-scroll';

const Home = () => {

  return (
    <section className='h-[790px] w-full bg-home-purple flex flex-col justify-center text-center' id="home">
      <div className='lg:flex-row lg:justify-center lg:items-start ml-0 lg:ml-[315px] gap-[50px] flex flex-col items-center'>
        <div className='flex flex-col'>
          <h1 className='text-white text-[60px] lg:text-[80px] mt-[60px] lg:mt-0 '>Hi, I'm <span className='bg-gradient-text text-transparent bg-clip-text'>Peter.</span></h1>
          <h4 className='text-white text-[35px]'>Full Stack <span className='bg-gradient-text text-transparent bg-clip-text'>Developer</span></h4>
          <button className='rounded-[30px] border border-2-white text-white font-[800] py-3 w-[270px] ml-[65px] btn hidden lg:block mt-[40px]'>
            <Link to="about" smooth={true} duration={500} className='mx-auto'>
              Learn More
            </Link>
          </button>
          <div className='text-white lg:flex justify-center items-center pt-7 gap-2 lg:hidden'>
            <a href="https://www.linkedin.com/in/peter-ji/">
              <LinkedInIcon className='hover:text-custom-blue hover:scale-110 hover:duration-200' sx={{ fontSize: "3rem" }} />
            </a>
            <a href="https://github.com/hjj2895">
              <GitHubIcon className='hover:text-custom-black hover:scale-110 hover:duration-200' sx={{ fontSize: "3rem" }} />
            </a>
            <a href={'mailto: hyeongjun9@gmail.com'}>
              <EmailIcon className='hover:scale-110 hover:duration-200' sx={{ fontSize: "3rem" }} />
            </a>
          </div>
        </div>
        <img src={ProfilePic} alt="profile-pic" className='w-80 h-80 rounded-full sm:mr-3 mr-0' />
        <button className='rounded-[30px] border border-2-white text-white font-[800] py-3 w-[270px] mr-3 btn visible lg:hidden'>
          <Link to="about" smooth={true} offset={70} duration={500} className='mx-auto'>
            Learn More
          </Link>
        </button>
      </div>

    </section>
  )
}

export default Home