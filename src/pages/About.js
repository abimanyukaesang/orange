import React from 'react';
import Banner from '../components/Banner';
import AboutVideo from '../components/AboutVideo';



import Slide1 from '../assets/images/bg-about.jpg';
import AboutIntro from '../components/AboutIntro';
import AboutActivity from '../components/AboutActivity';
import AboutPerformance from '../components/AboutPerformance';
const slideAbout1 = {backgroundImage: 'url(' + Slide1 + ')',};

const About =() =>(
    <div>
        
        {/* <Banner style={slideAbout1}/> */}

        <AboutVideo/>    
        <AboutIntro/>
        <AboutActivity/>
        <AboutPerformance/>

    </div>
)

export default About;