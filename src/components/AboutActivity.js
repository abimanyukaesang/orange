import React, { Component } from 'react';
import '../assets/scss/AboutActivity.scss';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import slide1 from '../assets/images/activity1.jpg';
import slide2 from '../assets/images/activity2.jpg';
import slide3 from '../assets/images/activity3.jpg';
import slide4 from '../assets/images/activity4.jpg';
import slide5 from '../assets/images/activity5.jpg';
import slide6 from '../assets/images/activity6.jpg';
import slide7 from '../assets/images/activity7.jpg';
import slide8 from '../assets/images/activity8.jpg';
import slide9 from '../assets/images/activity9.jpg';

const itemOwl = [
    { id:1, imageUrl: slide1},
    { id:2, imageUrl: slide2},
    { id:3, imageUrl: slide3},
    { id:4, imageUrl: slide4},
    { id:5, imageUrl: slide5},
    { id:6, imageUrl: slide6},
    { id:7, imageUrl: slide7},
    { id:8, imageUrl: slide8},
    { id:9, imageUrl: slide9}
]

class AboutActivity extends Component{

    constructor(props) {
        super(props);
        this.state = {
            responsive:{
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 2,
                },
            },
        };
    }

    render() {
        return (
            <div className='slide-about'>
                <OwlCarousel
                    id="about-us"
                    className="owl-theme"
                    center={true}
                    loop
                    margin={10}
                    nav 
                    dots    ={false}
                    items={5}
                    autoplay
                    responsive={this.state.responsive}
                    
                >
                    {
                        itemOwl.map(item => 
                            <div className='about-item' key={item.id}>
                                <img id={item.id} src={item.imageUrl}/>
                            </div>
                        )
                    }
                </OwlCarousel>
            </div>
        )
    }
}

export default AboutActivity;