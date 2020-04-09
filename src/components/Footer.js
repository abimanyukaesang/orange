import React from 'react';
import '../assets/scss/Footer.scss'


const Footer =() => (
    <div className='main-footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='text-right'>
                        <a href='#' className='btn-wa'>
                            <i className="fa fa-whatsapp" aria-hidden="true"></i>
                            Whatsapp
                        </a>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-3'>
                    <h5>Orange Incentive House</h5>
                    <p>
                        Panorama Building 6th Floor <br/>
                        Jl. Tomang Raya no 63 <br/>
                        Jakarta 11440 <br/>
                    </p>
                </div>
                <div className='col-md-5'>
                    <h5>Reach Us Out!</h5>
                    <p>
                        Phone : +6221 2556 5555 <br/>
                        Whatsapp : +62817 00000000 <br/>
                        salesandmarketing@panorama-jtb.com <br/>
                    </p>
                </div>
                <div className='col-md-4'>
                    {/* <div className='form-group has-icon'>
                        <input className="form-control form-control-lg" placeholder='Enter your email to stay in the know'/>
                        <i className="fa fa-long-arrow-right form-control-icon" aria-hidden="true"></i>
                    </div> */}
                    <div className='text-right'>
                        <a rel="nofollow" href="#" className="social facebook" target="_blank">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a rel="nofollow" href="#" className="social instagram" target="_blank">
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-12'>
                    <hr/>
                    <div className='copyright'>© ORANGE INCENTIVE HOUSE. ALL RIGHT RESERVED 2019</div>
                </div>
            </div>

        </div>
    </div>
)

export default Footer;