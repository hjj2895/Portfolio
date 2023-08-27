import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }

  return (
    <div className='header'>
        <Link to="/">
            <h1>Peter Ji</h1>
        </Link>
        <ul className={click ? "nav-menu active" : 
        "nav-menu"}>
            <li>
                <Link to="/" className='nav-link'>Home</Link>
            </li>
            <li>
                <Link to="/about" className='nav-link'>About</Link>
            </li>
            <li>
                <Link to="/projects" className='nav-link'>Projects</Link>
            </li>
            <li>
                <Link to="/contact" className='nav-link'>Contact</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: "#fff"}}/>
            ) : (<FaBars size={20} style={{color: "#fff"}}/>) }
        </div>
    </div>
  )
}

export default Navbar