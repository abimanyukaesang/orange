import React from 'react';
import '../assets/scss/HomeSecondSlider.scss';

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

const contentService1 = {backgroundImage: 'url(' + OurService1 + ')',};
const contentService2 = {backgroundImage: 'url(' + OurService2 + ')',};
const contentService3 = {backgroundImage: 'url(' + OurService3 + ')',};
const contentService4 = {backgroundImage: 'url(' + OurService4 + ')',};
const contentService5 = {backgroundImage: 'url(' + OurService5 + ')',};




const HomeSecondSlider =() =>(
    <div className='second-banner'>

        

        <div id="HomeSecondSlider" className="carousel slide" data-ride="carousel">
            <div className='frame-top'></div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className='slide1' style={contentService1}></div>
                    <div className="carousel-caption d-none d-md-block">
                        <div className='row'>
                            <div className="col-md-4">
                                <h2>Tailor Made Trips</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <a href='#' className='btn btn-red'>LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='slide1' style={contentService2}></div>
                    <div className="carousel-caption d-none d-md-block">
                        <div className='row'>
                            <div className="col-md-5">
                                <h2>Corporate Event, Gathering & Meeting</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <a href='#' className='btn btn-red'>LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='slide1' style={contentService3}></div>
                    <div className="carousel-caption d-none d-md-block">
                        <div className='row'>
                            <div className="col-md-5">
                                <h2>Corporate Video</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <a href='#' className='btn btn-red'>LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='slide1' style={contentService4}></div>
                    <div className="carousel-caption d-none d-md-block">
                        <div className='row'>
                            <div className="col-md-4">
                                <h2>Corporate Team Building</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <a href='#' className='btn btn-red'>LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='slide1' style={contentService5}></div>
                    <div className="carousel-caption d-none d-md-block">
                        <div className='row'>
                            <div className="col-md-5">
                                <h2>Themed Gala Dinner</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <a href='#' className='btn btn-red'>LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className='container'>
                <div className='row justify-content-end'>
                    <div className='col-md-8'>
                        <ol className="carousel-indicators">
                            <li data-target="#HomeSecondSlider" data-slide-to="0" className="active">
                                <img src={Service1} alt=''/>
                                <p>
                                    TAILOR <br/>
                                    MADE TRIPS
                                </p>
                            </li>
                            <li data-target="#HomeSecondSlider" data-slide-to="1">
                                <img src={Service2} alt=''/>
                                <p>
                                    CORPORATE <br/>
                                    EVENT, GATHERING <br/>
                                    & MEETING
                                </p>
                            </li>
                            <li data-target="#HomeSecondSlider" data-slide-to="2">
                                <img src={Service3} alt=''/>
                                <p>
                                    CORPORATE <br/>
                                    VIDEO
                                </p>
                            </li>
                            <li data-target="#HomeSecondSlider" data-slide-to="3">
                                <img src={Service4} alt=''/>
                                <p>
                                    CORPORATE <br/>
                                    TEAM BUILDING
                                </p>
                            </li>
                            <li data-target="#HomeSecondSlider" data-slide-to="4">
                                <img src={Service5} alt=''/>
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