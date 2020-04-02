import React from 'react';
import '../assets/scss/AboutActivity.scss';

import slide1 from '../assets/images/activity1.jpg';
import slide2 from '../assets/images/activity2.jpg';
import slide3 from '../assets/images/activity3.jpg';
import slide4 from '../assets/images/activity4.jpg';
import slide5 from '../assets/images/activity5.jpg';
import slide6 from '../assets/images/activity6.jpg';
import slide7 from '../assets/images/activity7.jpg';
import slide8 from '../assets/images/activity8.jpg';
import slide9 from '../assets/images/activity9.jpg';

const AboutActivity =() =>(
    <div className='slide-about'>
        <div id="about-us" className="owl-carousel">
            <div className="about-item">
                <img src={slide1} alt="activity"/>
            </div>
            <div className="about-item">
                <img src={slide2} alt="activity"/>
            </div>
            <div className="about-item">
                <img src={slide3} alt="activity"/>
            </div>
            <div className="about-item">
                <img src={slide4} alt="activity"/>
            </div>
            <div className="about-item">
                <img src={slide5} alt="activity"/>
            </div>
            <div className="about-item">
                <img src={slide6} alt="activity"/>
            </div>
            <div className="about-item">
                <img src={slide7} alt="activity"/>
            </div>
            <div className="about-item">
                <img src={slide8} alt="activity"/>
            </div>
            <div className="about-item">
                <img src={slide9} alt="activity"/>
            </div>
        </div>
    </div>
)

export default AboutActivity;