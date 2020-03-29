import React from 'react';
import '../assets/scss/Detail.scss'
import DetailGallery from '../components/DetailGallery';

const Detail =() =>(
    <div>

        <DetailGallery/>

        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                    <div className='side-left'>
                        <h2>CORPORATE TEAM BUILDING</h2>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

                            <div className='text-center'>
                                <a href='#' className='btn-wa'>
                                    <i className="fa fa-whatsapp" aria-hidden="true"></i>
                                    Whatsapp
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Detail;