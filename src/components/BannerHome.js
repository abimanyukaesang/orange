import React from 'react';
import '../assets/scss/BannerHome.scss';

const BannerHome =(props) =>(
    <div className='main-banner'>
        <div className='slide1' style={props.style}>
            <div className="carousel-caption d-none d-md-block">
                <div className='row justify-content-end'>
                    <div className="col-md-8">
                        <h2>NEVER STOP EXPLORING</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <a href='#' data-toggle="modal" data-target="#exampleModal">
                            WATCH VIDEO
                            <i className="fa fa-play-circle" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className='frame-bottom'></div>

            <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
)

export default BannerHome;