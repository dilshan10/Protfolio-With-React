import React from 'react'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroImageTwo from "../components/HeroImageTwo";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
      <div>
          <NavBar/>
          <HeroImageTwo heading="ABOUT" text="I'm friendly Front-End Developer."/>
          <AboutContent/>
          <Footer/>
      </div>
  )
}

export default About
