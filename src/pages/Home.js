import React from 'react';
import '../assets/scss/Home.scss';
import HomeSlider from '../components/HomeSlider';
import HomeSecondSlider from '../components/HomeSecondSlider';
import HomeWhy from '../components/HomeWhy';
import iconWhy1 from '../assets/images/our-clients.svg';
import iconWhy2 from '../assets/images/our-projects.svg';
import iconWhy3 from '../assets/images/our-people.svg';
import iconWhy4 from '../assets/images/our-credibility.svg';
import HomeAchievements from '../components/HomeAchievements';



const itemWhy = [
    {
        imageUrl: iconWhy1,
        title: 'OUR CLIENTS', 
        subTitle: '1000 corporate clients', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
    },
    {
        imageUrl: iconWhy2,
        title: 'OUR PROJECTS', 
        subTitle: '2000 unique incentive trips created', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
    },
    {
        imageUrl: iconWhy3,
        title: 'OUR PEOPLE', 
        subTitle: 'over 9 JAN 2002 travel professionals working passionately for you', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
    },
    {
        imageUrl: iconWhy4,
        title: 'OUR CREDIBILITY', 
        subTitle: 'average 2000 increase in loyalty, statisfaction, and teamwork', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
    }
    
]

const Home =() =>(
    <div>
        <HomeSlider/>
        
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h2>WHY CHOOSE ORANGE</h2>
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