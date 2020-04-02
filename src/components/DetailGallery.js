import React, { Component } from 'react';
import { ReactBnbGallery } from 'react-bnb-gallery';
import 'react-bnb-gallery/dist/style.css';

import Slide1 from '../assets/images/tmt1.jpg';
import Slide2 from '../assets/images/tmt2.jpg';
import Slide3 from '../assets/images/tmt3.jpg';
import Slide4 from '../assets/images/tmt4.jpg';
import Slide5 from '../assets/images/tmt5.jpg';

const slide1 = { backgroundImage: 'url(' + Slide1 + ')', };



const photos = [{
    photo: Slide2,
    caption: "tes foto 2",
    subcaption: "Photo by Gerardo Sanchez on Unsplash",
    thumbnail: Slide2,
  }, 
  {
    photo: Slide3,
    caption: "tes foto 3",
    subcaption: "Photo by Hannah Cauhepe on Unsplash",
    thumbnail: Slide3,
  },
  {
    photo: Slide4,
    caption: "tes foto 3",
    subcaption: "Photo by Hannah Cauhepe on Unsplash",
    thumbnail: Slide4,
  },
  {
    photo: Slide5,
    caption: "tes foto 3",
    subcaption: "Photo by Hannah Cauhepe on Unsplash",
    thumbnail: Slide5,
  }
];

class DetailGallery extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            galleryOpened: false
        };
        this.toggleGallery = this.toggleGallery.bind(this);
    }

    toggleGallery() {
        this.setState(prevState => ({
            galleryOpened: !prevState.galleryOpened
        }));
    }

    render() {
        return (
            <div className='gallery'>
                <div className='container-fluid p-0'>
                    <div className='row m-0 p-0'>
                        <div className='col-md-6 p-0' onClick={this.toggleGallery}>
                            <img src={Slide1} className="img-fluid" alt="" />
                        </div>
                        <div className='col-md-6 p-0'>
                            <div className='row m-0'>
                                {photos.map((item) => {
                                    return (
                                        <div className='col-md-6 p-0' onClick={this.toggleGallery}>
                                            <img src={item.photo} className="img-fluid" alt="" />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <ReactBnbGallery
                            show={this.state.galleryOpened}
                            photos={photos}
                            wrap={true}
                            backgroundColor='#000000'
                            onClose={this.toggleGallery}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailGallery;