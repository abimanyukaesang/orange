import React from 'react';
import '../assets/scss/HomeSecondSlider.scss';
import {Link} from 'react-router-dom';

import Service1 from '../assets/images/service-1.svg';
import Service2 from '../assets/images/service-2.svg';
import Service3 from '../assets/images/service-3.svg';
import Service4 from '../assets/images/service-4.svg';
import Service5 from '../assets/images/service-5.svg';

import OurService1 from '../assets/images/our-service1.jpg';
import OurService2 from '../assets/images/our-service2.jpg';
import OurService3 from '../assets/images/our-service2.jpg';
import OurService4 from '../assets/images/our-service4.jpg';
import OurService5 from '../assets/images/our-service5.jpg';

import OurServiceControl1 from '../assets/images/our-service-control1.jpg';
import OurServiceControl2 from '../assets/images/our-service-control2.jpg';
import OurServiceControl3 from '../assets/images/our-service-control3.jpg';
import OurServiceControl4 from '../assets/images/our-service-control4.jpg';
import OurServiceControl5 from '../assets/images/our-service-control5.jpg';

const contentService1 = {backgroundImage: 'url(' + OurService1 + ')',};
const contentService2 = {backgroundImage: 'url(' + OurService2 + ')',};
const contentService3 = {backgroundImage: 'url(' + OurService3 + ')',};
const contentService4 = {backgroundImage: 'url(' + OurService4 + ')',};
const contentService5 = {backgroundImage: 'url(' + OurService5 + ')',};

const controlService1 = {backgroundImage: 'url(' + OurServiceControl1 + ')',};
const controlService2 = {backgroundImage: 'url(' + OurServiceControl2 + ')',};
const controlService3 = {backgroundImage: 'url(' + OurServiceControl3 + ')',};
const controlService4 = {backgroundImage: 'url(' + OurServiceControl4 + ')',};
const controlService5 = {backgroundImage: 'url(' + OurServiceControl5 + ')',};




const HomeSecondSlider =() =>(
    <div className='second-banner'>

        

        <div id="HomeSecondSlider" className="carousel slide" data-ride="carousel">
            <div className='frame-top'></div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className='slide1' style={contentService1}></div>
                    <div className='masking'></div>
                    <div className="carousel-caption d-md-block">
                        <div className='row'>
                            <div className="col-md-4">
                                <h2>Tailor Made Trips</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <Link to={`/services`} className='btn btn-gradient-orange'>Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='slide1' style={contentService2}></div>
                    <div className='masking'></div>
                    <div className="carousel-caption d-md-block">
                        <div className='row'>
                            <div className="col-md-5">
                                <h2>Corporate Event, Gathering & Meeting</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <Link to={`/services`} className='btn btn-gradient-orange'>Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='slide1' style={contentService3}></div>
                    <div className='masking'></div>
                    <div className="carousel-caption d-md-block">
                        <div className='row'>
                            <div className="col-md-5">
                                <h2>Corporate Video</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <Link to={`/services`} className='btn btn-gradient-orange'>Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='slide1' style={contentService4}></div>
                    <div className='masking'></div>
                    <div className="carousel-caption d-md-block">
                        <div className='row'>
                            <div className="col-md-4">
                                <h2>Corporate Team Building</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <Link to={`/services`} className='btn btn-gradient-orange'>Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='slide1' style={contentService5}></div>
                    <div className='masking'></div>
                    <div className="carousel-caption d-md-block">
                        <div className='row'>
                            <div className="col-md-5">
                                <h2>Themed Gala Dinner</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <Link to={`/services`} className='btn btn-gradient-orange'>Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <a className="carousel-control-prev d-md-block" href="#HomeSecondSlider" role="button" data-slide="prev">
                <span className='left-arrow'></span>
            </a>
            <a className="carousel-control-next d-md-block" href="#HomeSecondSlider" role="button" data-slide="next">
                <span className='right-arrow'></span>
            </a>
           
            <div className='container d-none d-md-block'>
                <div className='row justify-content-end'>
                    <div className='col-md-8'>
                        <ol className="carousel-indicators">
                            <li data-target="#HomeSecondSlider" data-slide-to="0" className="active" style={controlService1}>
                                {/* <img src={Service1} alt=''/> */}
                                <p>
                                    TAILOR <br/>
                                    MADE TRIPS
                                </p>
                            </li>
                            <li data-target="#HomeSecondSlider" data-slide-to="1" style={controlService2}>
                                {/* <img src={Service2} alt=''/> */}
                                <p>
                                    CORPORATE <br/>
                                    EVENT, GATHERING <br/>
                                    & MEETING
                                </p>
                            </li>
                            <li data-target="#HomeSecondSlider" data-slide-to="2" style={controlService3}>
                                {/* <img src={Service3} alt=''/> */}
                                <p>
                                    CORPORATE <br/>
                                    VIDEO
                                </p>
                            </li>
                            <li data-target="#HomeSecondSlider" data-slide-to="3" style={controlService4}>
                                {/* <img src={Service4} alt=''/> */}
                                <p>
                                    CORPORATE <br/>
                                    TEAM BUILDING
                                </p>
                            </li>
                            <li data-target="#HomeSecondSlider" data-slide-to="4" style={controlService5}>
                                {/* <img src={Service5} alt=''/> */}
                                <p>
                                    THEMED<br/>
                                    GALA DINNER
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

        </div>
    </div>
)

export default HomeSecondSlider;