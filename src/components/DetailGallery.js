import React from 'react';


import Slide1 from '../assets/images/banner-ctb.jpg';
const slide1 = {backgroundImage: 'url(' + Slide1 + ')',};

const DetailGallery =() => (
    <div className='detail-gallery'>
        <div className='slide1' style={slide1}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 d-flex justify-content-end'>
                        <a href='#' className='btn btn-orange'>SHOW ALL PHOTO</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default DetailGallery;