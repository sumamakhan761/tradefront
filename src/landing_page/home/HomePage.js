import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Education from './Education';
import Pricing from './Pricing';
import Stats from './Stats';
import OpenAccount from '../OpenAccount'
import Footer from '../footer';
import Navbar from '../Navbar';

function HomePage() {
  return (
    <>
    
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />  
    
    </>
  );
}

export default HomePage;