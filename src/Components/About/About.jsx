import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="container mx-auto">
            <div className="__about-me d-flex align-items-center justify-content-center flex-column">
                <img src="https://i.ibb.co/4WCtR4y/placeholder-m.jpg" alt="" className="w-25" />
                <h2 className="text-center fw-bold my-3">Alapottra Chakma</h2>
                <p>I am very passionate about programming and My goal for now is to become a junior Web Developer by the end of this year. I am currently practicing and learning through a Course by Programming Hero. It has been great so far. I have learned a lot and gained a lot of knowledge and confident. I will work hard to fufill my goal and will keep on learning and developing myself</p>
            </div>
        </div>
    );
};

export default About;