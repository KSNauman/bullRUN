import React from 'react';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Hero from './Hero';
import Award from './Award';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';

function HomePage() {
    return ( <>
    <Navbar/>
    <Hero/>
    <Award/>
    <Stats/>
    <Pricing/>
    <Education/>
    <OpenAccount/>
    <Footer/>
    </> );
}

export default HomePage;