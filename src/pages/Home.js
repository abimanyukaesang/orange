import React from 'react';
import '../assets/scss/Home.scss';
import BannerHome from '../components/BannerHome';
import HomeSlider from '../components/HomeSlider';
import HomeSecondSlider from '../components/HomeSecondSlider';
import HomeWhy from '../components/HomeWhy';
import iconWhy1 from '../assets/images/our-clients.svg';
import iconWhy2 from '../assets/images/our-projects.svg';
import iconWhy3 from '../assets/images/our-people.svg';
import iconWhy4 from '../assets/images/our-credibility.svg';
import HomeAchievements from '../components/HomeAchievements';


import Slide1 from '../assets/images/homepage1.jpg';
const slideAbout1 = {backgroundImage: 'url(' + Slide1 + ')',};


const itemWhy = [
    {
        imageUrl: iconWhy1,
        title: 'CLIENTS', 
        subTitle: '', 
        content: ' Over 1000 corporate clients have trusted and explored with Orange Incentive House. We deliver each corporate client with a unique and once in a lifetime memories to create the best experiences they will encounter. '
    },
    {
        imageUrl: iconWhy2,
        title: 'PROJECTS', 
        subTitle: '', 
        content: 'We have created over 2000 unique incentive trips for our corporate clients.'
    },
    {
        imageUrl: iconWhy3,
        title: 'PEOPLE', 
        subTitle: '', 
        content: 'We have over 2000 travel professionals working passionately for you'
    },
    {
        imageUrl: iconWhy4,
        title: 'CREDIBILITY', 
        subTitle: '', 
        content: 'Through our trips, it’s more than just creating experiences. It’s also creating friendships, bonds, and happiness. Through research, we have found out that there has been a 200% increase in loyalty, satisfaction, and teamwork within the corporation'
    }
    
]

const Home =() =>(
    <div>
        <HomeSlider/>

        {/* <BannerHome style={slideAbout1}/> */}
        
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h2>Why Customers Explore With Us</h2>
                </div>
            </div>
            <div className="row">
                {
                    itemWhy.map(item => 
                        <HomeWhy 
                            imageUrl={item.imageUrl} 
                            title={item.title}
                            subTitle={item.subTitle} 
                            content={item.content} 
                        />
                    )
                }
            </div>
        </div>

        <HomeSecondSlider/>
        <HomeAchievements/>

    </div>
)

export default Home;