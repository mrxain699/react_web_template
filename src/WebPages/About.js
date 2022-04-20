import React from 'react'
import Navbar from '../Web/Navbar';
import Sections from '../Web/Sections';
import Footer from '../Web/Footer';
const About = () => {
    return (
        <>
        <Navbar />
        <Sections name="about" image='/images/about.svg' />
        <Footer />
      </>
    )
}

export default About;