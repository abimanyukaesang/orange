import React from 'react';
import '../assets/scss/Detail.scss'
import DetailGallery from '../components/DetailGallery';

function Detail (props){
    const name = props.match.params.name;
    const title = props.location.state.title;
    const desc = props.location.state.desc;
    const media = props.location.state.media;
    return(
        <div>
            <DetailGallery/>

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

                                    <iframe style={{width:'100%', height:300,}} src="https://www.youtube.com/embed/pGFWb4btass" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                
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