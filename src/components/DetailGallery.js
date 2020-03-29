import React from 'react';


import Slide1 from '../assets/images/banner-ctb.jpg';
import Slide2 from '../assets/images/ctb1.jpg';

const slide1 = {backgroundImage: 'url(' + Slide1 + ')',};

const DetailGallery =() => (
    <div className='detail-gallery'>
        <div className='slide1' style={slide1}>
            <div className='masking'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 d-flex flex-row-reverse'>
                            <a href='#' className='btn btn-orange'>SHOW ALL PHOTO</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='container'>
            <div className='row'>
                <a className="fancybox col-md-4 mb-4" rel="gallery" href={Slide2} title="">
                    <img src={Slide2} alt="" className="img-fluid" />
                </a>
                <a className="fancybox col-md-4 mb-4" rel="gallery" href={Slide2} title="">
                    <img src={Slide2} alt="" className="img-fluid" />
                </a>
            </div>
        </div>
    </div>
)

export default DetailGallery;