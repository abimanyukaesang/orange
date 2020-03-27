import React from 'react';
import '../assets/scss/HomeWhy.scss';

const HomeWhy =(props) =>(
    <div className='col-md-3'>
        <div className='why-wrap-item'>
            <img src={props.imageUrl} className="card-img-top" alt="" />
            <h4>{props.title}</h4>
            <p>
                {props.subTitle}
            </p>
            <p>
                {props.content}
            </p>
        </div>
    </div>
)

export default HomeWhy;