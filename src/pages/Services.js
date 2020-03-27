import React from 'react';
import '../assets/scss/Service.scss';
import Banner from '../components/Banner';

import Slide1 from '../assets/images/bg-service.jpg';
import ServiceContent from '../components/ServiceContent';



const slideAbout1 = {backgroundImage: 'url(' + Slide1 + ')',};




const Service =() => (
    <div>
        <div className='banner'>
            <Banner style={slideAbout1}/>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-8 offset-md-2'>
                    <h2>OUR SERVICES</h2>
                    <p className='service-intro'>
                        To build a glorious palace, the architects of the ancient time will select the best workers and highly reward them once it was built and the monarch was impressed. The same thing goes in empowering a company. Rewarding our employeess who achieve and exceed targets is an act of honor in order to build and essence of togetherness and unity amongst the employees. Orange is a here to give amazing hearty experiences by providing Incentive Tour designated fo every Corporate Incentive customers. To develop a strong bond between the company and their employees is our priority.
                    </p>
                </div>
            </div>
        </div>

        <div className='container-fluid p-0'>
            <ServiceContent/>
        </div>

    </div>
)

export default Service;