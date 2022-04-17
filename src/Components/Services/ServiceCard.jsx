import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'

const ServiceCard = ({service}) => {
    return (
        <div className='__card-container' >
            <div className="__img-container">
                    <img src={service.image} alt="" />
                    <h2 className='__services-name'>{service.name}</h2>
            </div>
            <div className="__details">
               
                <p>{service.des}</p>
            </div>
            <div className="__price">
                <h2>{service.price} $</h2>
                <div className="text-center">
           <Link to={`service/${service.slug}`}><button className='__book-btn'>BOOK NOW</button></Link>
           </div>
            </div>
          
        </div>
    );
};

export default ServiceCard;