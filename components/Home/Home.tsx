"use client";
import React, { useEffect } from 'react'
import Hero from './Hero/Hero';
import Approach from './Approach/Approach';
import Contact from './Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Experience from './Experience/Experience';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);
  return (
    <div className="overflow-hidden">
      <div id="home">
        <Hero />
      </div>
      <div id="approach">
        <Approach />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  )
}

export default Home;
