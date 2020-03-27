import React from 'react';
import '../assets/scss/AboutPerformance.scss';

import Slide1 from '../assets/images/performance.jpg';
import Slide2 from '../assets/images/performance.jpg';

const AboutPerformance =() =>(
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div id="carousePerformance" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='content-performance'>
                                            <h4>BEST PERFORMANCE IN SELLING INCENTIVE GROUP 2016 </h4>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div>
                                            <img src={Slide1} alt='' className='img-fluid'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='content-performance'>
                                            <h4>BEST PERFORMANCE IN SELLING INCENTIVE GROUP 2016 </h4>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div>
                                            <img src={Slide2} alt='' className='img-fluid'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carousePerformance" role="button" data-slide="prev">
                            <span className='left-arrow'></span>
                        </a>
                        <a className="carousel-control-next" href="#carousePerformance" role="button" data-slide="next">
                            <span className='right-arrow'></span>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default AboutPerformance;