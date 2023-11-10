import React from 'react'
import { Link } from 'react-scroll'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const openNewTab = () => {
    window.open('https://drive.google.com/file/d/1cZmP0YYQjCD5iheNgJyf8St8H1ZOKKn3/view');
  };

  return (
    <div className='w-full h-[90px] bg-[#a68ff2] visible lg:hidden'>
      <div className='flex justify-between items-center mx-4 '>
        <span className='text-white text-2xl mt-4'>
          <Link to="home" smooth={true} duration={500} className='cursor-pointer hover:bg-gradient-text hover:text-transparent hover:bg-clip-text'>
              Home
          </Link>
        </span>
        <div className='text-white flex justify-center items-center gap-4 mt-4'>
                        <a className='text-white text-2xl cursor-pointer hover:bg-gradient-text hover:text-transparent hover:bg-clip-text'
                           onClick={openNewTab}
                        >
                          Resume
                        </a>
                        <a href="https://www.linkedin.com/in/peter-ji/">
                            <LinkedInIcon className='hover:text-custom-blue hover:scale-110 hover:duration-200' sx={{ fontSize: "3rem" }} />
                        </a>
                        <a href="https://github.com/hjj2895">
                            <GitHubIcon className='hover:text-custom-black hover:scale-110 hover:duration-200' sx={{ fontSize: "2.8rem" }} />
                        </a>
                    </div>
      </div>
    </div>
  )
}

export default Footer