import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Link as ScrollLink, Element} from 'react-scroll';

const SideBar = () => {
    const openNewTab = () => {
        window.open('https://drive.google.com/file/d/1cZmP0YYQjCD5iheNgJyf8St8H1ZOKKn3/view');
    };

    const [activeLink, setActiveLink] = React.useState<string>('home');

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
    };

    const [click, setClick] = React.useState<boolean>(false);
    const handleClick = () => {
        setClick(!click);
    }

    const handleScroll = () => {
        const sectionOffsets: Record<string, number> = {};
        const sections = document.querySelectorAll('section'); 
      
        sections.forEach((section) => {
          const sectionId = section.id;
          const sectionTop = section.offsetTop;
          sectionOffsets[sectionId] = sectionTop;
        });
      
        const scrollPosition = window.scrollY;
      
        let closestSection: string = '';
        let closestDistance = Infinity;
      
        for (const sectionId in sectionOffsets) {
          const distance = Math.abs(sectionOffsets[sectionId] - scrollPosition);
          if (distance < closestDistance) {
            closestSection = sectionId;
            closestDistance = distance;
          }
        }
      
        setActiveLink(closestSection);
      };
      
      window.addEventListener('scroll', handleScroll);

    return (
        <>
            <div className='lg:h-screen lg:w-80 bg-custom-purple fixed w-full h-[90px] lg:p-5 lg:pt-8'>
                <div className='h-full lg:flex lg:flex-col lg:items-center lg:justify-center flex items-center'>
                    <ul className={`${click ? 'nav-menu active' : 'nav-menu'} text-graySlate font-bold text-[20px] flex justify-between items-center lg:space-y-7 lg:flex lg:flex-col lg:justify-center lg:items-center`}
                        style={{ textAlign: "center" }}>
                        <li
                            className={`custom-border small-border lg:text-right lg:pr-0 hover:brightness-75 cursor-pointer small-border ${activeLink === 'home' ? 'active-border' : ''}`}
                        >
                            <ScrollLink to="home" smooth={true} duration={500} onClick={() => handleLinkClick('home')}
                                className={activeLink === 'home' ? 'text-white' : ''}
                            >
                                Home
                            </ScrollLink>
                        </li>
                        <li
                            className={`custom-border small-border lg:text-right lg:pr-0 hover:brightness-75 cursor-pointer ${activeLink === 'about' ? 'active-border' : ''}`}
                        >
                            <ScrollLink to="about" smooth={true} duration={500} onClick={() => handleLinkClick('about')}
                                className={activeLink === 'about' ? 'text-white' : ''}>
                                About
                            </ScrollLink>
                        </li>
                        <li
                            className={`custom-border lg:text-right lg:pr-0 hover:brightness-75 cursor-pointer ${activeLink === 'skills' ? 'active-border' : ''}`}
                        >
                            <ScrollLink to="skills" smooth={true} duration={500} onClick={() => handleLinkClick('skills')}
                                className={activeLink === 'skills' ? 'text-white' : ''}>
                                Skills
                            </ScrollLink>
                        </li>
                        <li
                            className={`custom-border lg:text-right lg:pr-0 hover:brightness-75 cursor-pointer ${activeLink === 'projects' ? 'active-border' : ''}`}
                        >
                            <ScrollLink to="projects" smooth={true} duration={500} onClick={() => handleLinkClick('projects')}
                                className={activeLink === 'projects' ? 'text-white' : ''}>
                                Projects
                            </ScrollLink>
                        </li>
                        <li
                            className={`custom-border lg:text-right lg:pr-0 hover:brightness-75 cursor-pointer ${activeLink === 'contact' ? 'active-border' : ''}`}
                        >
                            <ScrollLink to="contact" smooth={true} duration={500} onClick={() => handleLinkClick('contact')}
                                className={activeLink === 'contact' ? 'text-white' : ''}>
                                Contact
                            </ScrollLink>
                        </li>
                    </ul>

                    <div className='text-white lg:flex justify-center items-center pt-7 gap-2 hidden'>
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
                    <span className='text-white text-xl mt-4 hidden lg:flex'>
                        <a className='hover:bg-gradient-text hover:text-transparent hover:bg-clip-text cursor-pointer'
                            onClick={openNewTab}
                        >
                            Resume
                        </a>
                    </span>
                    <div className='hamburger cursor-pointer' onClick={handleClick}>
                        {click ? (<CloseIcon sx={{ color: "#fff", fontSize: "3rem" }} />
                        ) : (<MenuIcon sx={{ color: "#fff", fontSize: "3rem" }} />)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar