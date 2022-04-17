import React from 'react';
import useServices from '../../Hooks/useServices';
import ServiceCard from './ServiceCard';
import './Services.css'

const Services = () => {
    const [services] = useServices();

    return (
        
        <div className="container mx-auto " id="services">
            <h2 className="service-title">SERVICES I PROVIDE</h2>
            <div className="__services-container">
                {services.map((service) => <ServiceCard service={service} />)}
            </div>
        </div>
    );
};

export default Services;