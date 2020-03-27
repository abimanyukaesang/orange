import React from 'react';
import '../assets/scss/Banner.scss';

const Banner =(props) =>(
    <div className='slide1' style={props.style}>
         { props.bannerName }
         <div className='frame-bottom'></div>
    </div>
)

export default Banner;