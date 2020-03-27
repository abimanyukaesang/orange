import React from 'react';
import '../assets/scss/Contact.scss'
import Banner from '../components/Banner';
import iconName from '../assets/images/icon-name.svg';
import iconEmail from '../assets/images/icon-email.svg';
import iconPhone from '../assets/images/icon-phone.svg';
import iconMessage from '../assets/images/icon-message.svg';

import Slide1 from '../assets/images/bg-contact.jpg';
const slideContact1 = {backgroundImage: 'url(' + Slide1 + ')',};



const Contact =() => (
    <div>
        <div className='banner'>
            <Banner style={slideContact1}/>
        </div>

        <div className='container'>
            <div className='row'>
                <div className='col-md-8 offset-md-2'>
                    <h2>CONTACT US</h2>
                    <p className='mb-4'>Do not hesitate to contact us if you have any questions about the services we provide, we will be happy to serve you. See you on the next journey.</p>

                    <form>
                        <div className='row mb-4'>
                            <div className='col-md-12'>
                                <div className='wrp-input'>
                                    <div className='wrp-icon'>
                                        <img src={iconName}/>
                                    </div>
                                    <input className="form-control form-control-lg" placeholder='Your Name'/>
                                </div>
                            </div>
                        </div>
                        <div className='row mb-4'>
                            <div className='col-md-6'>
                                <div className='wrp-input'>
                                    <div className='wrp-icon'>
                                        <img src={iconEmail}/>
                                    </div>
                                    <input className="form-control form-control-lg" placeholder='Your Name'/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='wrp-input'>
                                    <div className='wrp-icon'>
                                        <img src={iconPhone}/>
                                    </div>
                                    <input className="form-control form-control-lg" placeholder='Your Name'/>
                                </div>
                            </div>
                        </div>
                        <div className='row mb-4'>
                            <div className='col-md-12'>
                                <div className='wrp-input'>
                                    <div className='wrp-icon'>
                                        <img src={iconMessage}/>
                                    </div>
                                    <textarea className="form-control" rows="5"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 offset-md-4'>
                                <a href='#' className='btn btn-red btn-block'>SEND</a>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
)

export default Contact;