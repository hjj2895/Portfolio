import React from 'react';
import Home from './components/Home';
import About from './routes/About';
import Projects from './routes/Projects';
import Contact from './routes/Contact';
import SideBar from './components/SideBar'
import Footer from './components/Footer';
import HeroSection from './components/Home';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Skills from './components/Skills';

const App = () => {
  return (
    <>
      <SideBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
