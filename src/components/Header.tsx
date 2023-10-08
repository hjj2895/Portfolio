import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };

    return (
        <>
            <header className='h-23 bg-blue-400 sticky top-0 z-[1] w-full '>
                <nav className='flex flex-wrap justify-between items-center'>
                    <div className='ml-4'>
                        <NavLink to="/">
                            <h1 className='text-4xl text-white font-bold'>Peter Ji</h1>
                        </NavLink>
                    </div>
                    <div className='p-4'>
                        <ul className='md:flex items-center justify-between gap-5 mr-4 hidden'>
                            <li className=''>
                                <NavLink to="/" className='text-lg px-3 text-white hover:border-b-4 border-b-white transition-all hover:relative -top-1'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className='text-lg px-3 text-white text-white hover:border-b-4 border-b-white transition-all hover:relative -top-1'>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects" className='text-lg px-3 text-white text-white hover:border-b-4 border-b-white transition-all hover:relative -top-1'>Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className='text-lg px-3 text-white text-white hover:border-b-4 border-b-white transition-all hover:relative -top-1'>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='flex justify-end md:hidden p-4'>
                        <button onClick={toggleNavbar}>{isOpen ? <CloseIcon sx={{fontSize: "2rem", marginRight: "1.5rem", color: "#fff"}}/> : <MenuIcon sx={{fontSize: "2rem", marginRight: "1.5rem", color: "#fff"}}/>}</button>
                    </div>
                    {isOpen && (
                        <div className='flex basis-full flex-col items-center h-[50vh] md:hidden'> 
                          <ul className='py-7'>
                            <li>
                                <NavLink to="/" className='text-4xl text-white hover:border-b-4 border-b-white transition-all hover:relative -top-1'>Home</NavLink>
                            </li>
                            <li className='pt-6'>
                                <NavLink to="/about" className='text-4xl text-white text-white hover:border-b-4 border-b-white transition-all hover:relative -top-1'>About</NavLink>
                            </li>
                            <li className='pt-6'>
                                <NavLink to="/projects" className='text-4xl text-white text-white hover:border-b-4 border-b-white transition-all hover:relative -top-1'>Projects</NavLink>
                            </li>
                            <li className='pt-6'>
                                <NavLink to="/contact" className='text-4xl text-white text-white hover:border-b-4 border-b-white transition-all hover:relative -top-1'>Contact</NavLink>
                            </li>
                        </ul>
                        </div>
                    )}
                </nav>
            </header>
        </>
    )
}

export default Header