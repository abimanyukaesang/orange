import React from 'react';
import '../assets/scss/HomeAchievements.scss'

import Achievement1 from '../assets/images/achievement1.jpg';
import Achievement2 from '../assets/images/achievement2.jpg';
import Achievement3 from '../assets/images/achievement3.jpg';

const HomeAchievements =() =>(
    <div className='achievement-banner'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h2>Here’s What You Can Explore</h2>
                </div>
            </div>
        </div>
        <div id="carouselAchievements" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={Achievement1} alt='' className='img-fluid'/>
                            </div>
                            <div className='col-md-6'>
                                <div className='desc-achievements'>
                                    <h3>ANGKLUNG INSTRUMENT AT THE COLLOSEUM</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={Achievement2} alt='' className='img-fluid'/>
                            </div>
                            <div className='col-md-6'>
                                <div className='desc-achievements'>
                                    <h3>ANGKLUNG INSTRUMENT AT THE COLLOSEUM</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselAchievements" role="button" data-slide="prev">
                <span className='left-arrow'></span>
            </a>
            <a className="carousel-control-next" href="#carouselAchievements" role="button" data-slide="next">
                <span className='right-arrow'></span>
            </a>
        </div>
    </div>
)

export default HomeAchievements;