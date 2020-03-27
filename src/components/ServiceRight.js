import React from 'react';

import pictService1 from '../assets/images/our-service-tmt.jpg';
import bgServiceBlank from '../assets/images/bg-service-blank.jpg';
import IconService1 from '../assets/images/service-1.svg';

const ServiceRight =() =>(
    <div>
        <div className='row p-0 m-0'>
            <div className='col-md-6 order-sm-12 p-0'>
                <div className='wrp-content-service'>
                    <img src={bgServiceBlank} alt='' className='img-fluid'/>
                    <div className='content-service'>
                        <div className='item-service pdl'>
                            <img src={IconService1} alt=''/>

                            <h2>TAILOR MADI TRIPS</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>

                            <a className='btn btn-orange' href='#'>LEARN MORE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-6 order-sm-1 p-0'>
                <img src={pictService1} alt='' className='img-fluid'/>
            </div>
        </div>
    </div>
)

export default ServiceRight;