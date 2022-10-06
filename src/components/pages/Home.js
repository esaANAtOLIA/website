import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';

function Home() {

  return (
    <>
      <Helmet>
        <title>ANAtOLIA</title>
        <meta name="description" content="Atmospheric moNitoring to Assess the availability of Optical LInks through the Atmosphere" />
        <link rel="canonical" href="/" />
      </Helmet>
      <HeroSection />
      {/* <h1 className='home'><span>A</span>tmospheric mo<span>N</span>itoring to <span>A</span>ssess <span>t</span>he availability of <span>O</span>ptical <span>LI</span>nks through the <span>A</span>tmosphere</h1> */}
      <img id="intro" src='/images/Anatolia.jpg' alt='Anatolia' title='Anatolia'></img>
      <Cards />
    </>
  );
}

export default Home;
