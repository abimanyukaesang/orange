import React from 'react';
import '../assets/scss/AboutVideo.scss';
import ReactPlayer from 'react-player'

import AboutVideo1 from '../assets/images/videoheader.webm';

const AboutVideo =() =>(
    <div className='video'>
        <ReactPlayer playing url={AboutVideo1} 
            loop={true}
            width='100%'
            height='auto'
        />
        <div className='frame-bottom'></div>
    </div>
)

export default AboutVideo;