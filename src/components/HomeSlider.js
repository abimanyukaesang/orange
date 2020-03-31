import React from 'react';
import '../assets/scss/HomeSlider.scss';
import Slide1 from '../assets/images/homepage1.jpg';
import Slide2 from '../assets/images/homepage2.jpg';
import Slide3 from '../assets/images/homepage3.jpg';
import Slide4 from '../assets/images/homepage3.jpg';


const slide1 = {backgroundImage: 'url(' + Slide1 + ')',};
const slide2 = {backgroundImage: 'url(' + Slide2 + ')',};
const slide3 = {backgroundImage: 'url(' + Slide3 + ')',};
const slide4 = {backgroundImage: 'url(' + Slide4 + ')',};




const HomeSlider =() =>(
    <div className='main-banner'>

        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className='slide1' style={slide1}></div>
                    <div className="carousel-caption d-none d-md-block">
                        <div className='row justify-content-end'>
                            <div className="col-md-8">
                                <h2>NEVER STOP EXPLORING</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <a href='#' data-toggle="modal" data-target="#exampleModal">
                                    WATCH VIDEO
                                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                                </a>

                                
                                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            ...makan
                                        </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='slide2' style={slide2}></div>
                    <div className="carousel-caption d-none d-md-block">
                        <div className='row justify-content-end'>
                            <div className="col-md-8">
                                <h2>NEVER STOP EXPLORING</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='slide2' style={slide3}></div>
                    <div className="carousel-caption d-none d-md-block">
                        <div className='row justify-content-end'>
                            <div className="col-md-8">
                                <h2>NEVER STOP EXPLORING</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='slide2' style={slide4}></div>
                    <div className="carousel-caption d-none d-md-block">
                        <div className='row justify-content-end'>
                            <div className="col-md-8">
                                <h2>NEVER STOP EXPLORING</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className='left-arrow'></span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className='right-arrow'></span>
            </a>

            <div className='frame-bottom'></div>

        </div>
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
        </ol>
    </div>
)

export default HomeSlider;