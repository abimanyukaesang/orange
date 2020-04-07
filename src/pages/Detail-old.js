import React from 'react';
import '../assets/scss/Detail.scss'
// import DetailGallery from '../components/DetailGallery';
// import FancyBox from '../components/FancyBox';


import '../assets/scss/FancyBox.scss';


import tmt1 from '../assets/images/tmt1.jpg';
import tmt2 from '../assets/images/tmt2.jpg';
import tmt3 from '../assets/images/tmt3.jpg';
import tmt4 from '../assets/images/tmt4.jpg';
import tmt5 from '../assets/images/tmt5.jpg';

import ceg1 from '../assets/images/ceg1.jpg';
import ceg2 from '../assets/images/ceg2.jpg';
import ceg3 from '../assets/images/ceg3.jpg';
import ceg4 from '../assets/images/ceg4.jpg';
import ceg5 from '../assets/images/ceg5.jpg';

import video1 from '../assets/images/ceg1.jpg';
import video2 from '../assets/images/ceg2.jpg';
import video3 from '../assets/images/ceg3.jpg';
import video4 from '../assets/images/ceg4.jpg';
import video5 from '../assets/images/ceg5.jpg';

import ctb1 from '../assets/images/ctb1.jpg';
import ctb2 from '../assets/images/ctb2.jpg';
import ctb3 from '../assets/images/ctb3.jpg';
import ctb4 from '../assets/images/ctb4.jpg';
import ctb5 from '../assets/images/ctb5.jpg';

import tgd1 from '../assets/images/tgd1.jpg';
import tgd2 from '../assets/images/tgd2.jpg';
import tgd3 from '../assets/images/tgd3.jpg';
import tgd4 from '../assets/images/tgd4.jpg';
import tgd5 from '../assets/images/tgd5.jpg';
import tgd6 from '../assets/images/tgd6.jpg';


const tmtSlide = [
    {imageUrl: tmt1},
    {imageUrl: tmt2},  
    {imageUrl: tmt3},
    {imageUrl: tmt4},
    {imageUrl: tmt5}
]

const cegSlide = [
    {imageUrl: ceg1},
    {imageUrl: ceg2},  
    {imageUrl: ceg3},
    {imageUrl: ceg4},
    {imageUrl: ceg5}
]

const videoSlide = [
    {imageUrl: video1},
    {imageUrl: video2},  
    {imageUrl: video3},
    {imageUrl: video4},
    {imageUrl: video5}
]

const ctbSlide = [
    {imageUrl: ctb1},
    {imageUrl: ctb2},  
    {imageUrl: ctb3},
    {imageUrl: ctb4},
    {imageUrl: ctb5}
]

const tgdSlide = [
    {imageUrl: tgd1},
    {imageUrl: tgd2},  
    {imageUrl: tgd3},
    {imageUrl: tgd4},
    {imageUrl: tgd5}
]

function Detail (props){
    const name = props.match.params.name;
    const title = props.location.state.title;
    const desc = props.location.state.desc;
    const media = props.location.state.media;
    return(
        <div>
            {/* <DetailGallery/> */}
            {/* <FancyBox/> */}

            <div className="main-slider">
                {
                    tmtSlide.map(item => 
                        <a href={item.imageUrl} data-fancybox="images">
                            <img src={item.imageUrl} className='img-fluid' />
                        </a>
                    )
                }
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-8'>
                        <div className='row'>
                            <div className='col-md-11'>
                                <div className='side-left'>
                                    <h2>{title}</h2>

                                    <p>
                                        {desc}
                                    </p>

                                    <iframe style={{width:'100%', height:300,}} src="https://www.youtube.com/embed/pGFWb4btass" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                
                                </div>
                            </div>
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
}


export default Detail;