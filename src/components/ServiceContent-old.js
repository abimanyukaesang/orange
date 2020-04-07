import React from 'react';
import { Link } from "react-router-dom";

import bgServiceBlank from '../assets/images/bg-service-blank.jpg';
import pictService1 from '../assets/images/our-service-tmt.jpg';
import pictService2 from '../assets/images/our-service-ceg.jpg';
import pictService3 from '../assets/images/our-service-video.jpg';
import pictService4 from '../assets/images/our-service-ctb.jpg';
import pictService5 from '../assets/images/our-service-tgd.jpg';

import IconService1 from '../assets/images/service-1.svg';
import IconService2 from '../assets/images/service-2.svg';
import IconService3 from '../assets/images/service-3.svg';
import IconService4 from '../assets/images/service-4.svg';
import IconService5 from '../assets/images/service-5.svg';

const ServiceContent =() => (
    <div>
        <div className='row p-0 m-0'>
            <div className='col-md-6 order-sm-12 p-0'>
                <img src={pictService1} alt='' className='img-fluid'/>
            </div>
            <div className='col-md-6 order-sm-1 p-0'>
                <div className='wrp-content-service'>
                    <img src={bgServiceBlank} alt='' className='img-fluid'/>
                    <div className='content-service flex-row-reverse'>
                        <div className='item-service pdr'>
                            <img src={IconService1} alt=''/>

                            <h2>TAILOR MADE TRIPS</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>


                            <Link to={{
                                pathname: "/services/tmt", 
                                state: {
                                    title: "TAILOR MADI TRIPS",
                                    desc: "Ini Detailnya, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                                    }
                                }}
                                className='btn btn-orange'
                            >
                                LEARN MORE
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='row p-0 m-0'>
            <div className='col-md-6 order-sm-1 p-0'>
                <img src={pictService2} alt='' className='img-fluid'/>
            </div>
            <div className='col-md-6 order-sm-12 p-0'>
                <div className='wrp-content-service'>
                    <img src={bgServiceBlank} alt='' className='img-fluid'/>
                    <div className='content-service bg-grey'>
                        <div className='item-service pdl'>
                            <img src={IconService2} alt=''/>

                            <h2>CORPORATE EVENT, GATHERING & MEETING</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>

                            <Link to={{
                                pathname: "/services/ceg", 
                                state: {
                                    title: "CORPORATE EVENT, GATHERING & MEETING",
                                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                    }
                                }}
                                className='btn btn-orange'
                            >
                                LEARN MORE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='row p-0 m-0'>
            <div className='col-md-6 order-sm-12 p-0'>
                <img src={pictService3} alt='' className='img-fluid'/>
            </div>
            <div className='col-md-6 order-sm-1 p-0'>
                <div className='wrp-content-service'>
                    <img src={bgServiceBlank} alt='' className='img-fluid'/>
                    <div className='content-service flex-row-reverse bg-cream'>
                        <div className='item-service pdr'>
                            <img src={IconService3} alt=''/>

                            <h2>CORPORATE VIDEO</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>

                            <Link to={{
                                pathname: "/services/video", 
                                state: {
                                    title: "CORPORATE VIDEO",
                                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                    }
                                }}
                                className='btn btn-orange'
                            >
                                LEARN MORE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='row p-0 m-0'>
            <div className='col-md-6 order-sm-1 p-0'>
                <img src={pictService4} alt='' className='img-fluid'/>
            </div>
            <div className='col-md-6 order-sm-12 p-0'>
                <div className='wrp-content-service'>
                    <img src={bgServiceBlank} alt='' className='img-fluid'/>
                    <div className='content-service bg-cream'>
                        <div className='item-service pdl'>
                            <img src={IconService4} alt=''/>

                            <h2>CORPORATE TEAM BUILDING</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>

                            <Link to={{
                                pathname: "/services/ctb", 
                                state: {
                                    title: "CORPORATE TEAM BUILDING",
                                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                    }
                                }}
                                className='btn btn-orange'
                            >
                                LEARN MORE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='row p-0 m-0'>
            <div className='col-md-6 order-sm-12 p-0'>
                <img src={pictService5} alt='' className='img-fluid'/>
            </div>
            <div className='col-md-6 order-sm-1 p-0'>
                <div className='wrp-content-service'>
                    <img src={bgServiceBlank} alt='' className='img-fluid'/>
                    <div className='content-service flex-row-reverse bg-grey'>
                        <div className='item-service pdr'>
                            <img src={IconService5} alt=''/>

                            <h2>THEMED GALA DINNER</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>

                            <Link to={{
                                pathname: "/services/tgd", 
                                state: {
                                    title: "THEMED GALA DINNER",
                                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                    }
                                }}
                                className='btn btn-orange'
                            >
                                LEARN MORE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
)

export default ServiceContent;