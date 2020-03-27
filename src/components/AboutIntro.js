import React from 'react';
import '../assets/scss/AboutIntro.scss';

import Slide1 from '../assets/images/leadership1.jpg';
import Slide2 from '../assets/images/leadership2.jpg';
import Slide3 from '../assets/images/leadership3.jpg';

import Internal1 from '../assets/images/internal1.jpg';
import Internal2 from '../assets/images/internal2.jpg';

import dotLeft from '../assets/images/dot-left.svg';
import dotCenter from '../assets/images/dot-center.svg';

const AboutIntro =() =>(
    <div>
        <div className='about-intro'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h2 className='text-center mb-0'>THIS IS ORANGE</h2>
                    </div>
                </div>
                    
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='dot-left'>
                            <img src={dotLeft} alt='' className='img-fluid'/>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-6'>
                        <div id="carouselintro1" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div>
                                        <img src={Slide1} alt='' className='img-fluid'/>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div>
                                        <img src={Slide2} alt='' className='img-fluid'/>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div>
                                        <img src={Slide3} alt='' className='img-fluid'/>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselintro1" role="button" data-slide="prev">
                                <span className='left-arrow'></span>
                            </a>
                            <a className="carousel-control-next" href="#carouselintro1" role="button" data-slide="next">
                                <span className='right-arrow'></span>
                            </a>

                            <ol className="carousel-indicators">
                                <li data-target="#carouselintro1" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselintro1" data-slide-to="1"></li>
                                <li data-target="#carouselintro1" data-slide-to="2"></li>
                            </ol>
                        </div>
                        
                    </div>
                    <div className='col-md-6'>
                        <div className='content-right'>
                            <h2>LEADERSHIP</h2>

                            <div className='line-sparate'></div>

                            <h4>NAMA (JABATAN)</h4>
                            <p>
                                Those are the four principles that are always in my mind since I built Panorama Tours, and ever longer since I worked in 1961. From that moment, I believed that such principles could become a guideline in reaching the goal to not only make a better employee but also to make a better human being.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-12'>
                        <div className='dot-center'>
                            <img src={dotCenter} alt='' className='img-fluid'/>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-6'>
                        <div className='content-left'>
                            <h2>WHO WE ARE</h2>

                            <div className='line-sparate'></div>

                            <p>
                                Orange is a professional corporate incentive brand and stands as divison group of Panorama JTB Tours Indonesia with long of experience in planning, preparing and executing any incentive trip provided for any company across Indonesia. The name Orange comes with the values of Creativity, Expertise, Perfection, Synegy and Innovation
                            </p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div id="carouselintro2" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div>
                                        <img src={Internal1} alt='' className='img-fluid'/>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div>
                                        <img src={Internal2} alt='' className='img-fluid'/>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselintro2" role="button" data-slide="prev">
                                <span className='left-arrow'></span>
                            </a>
                            <a className="carousel-control-next" href="#carouselintro2" role="button" data-slide="next">
                                <span className='right-arrow'></span>
                            </a>

                            <ol className="carousel-indicators">
                            <li data-target="#carouselintro2" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselintro2" data-slide-to="1"></li>
                        </ol>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default AboutIntro;