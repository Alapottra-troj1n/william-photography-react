import React from 'react';
import Header from '../Navbar/Header';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <>
        
        <div className="__hero-section">
         <Header/>

         <div className="__hero-content">
             <div className="__tagline">
                 <h2>CREATE. CAPTURE. INSPIRE. </h2>
                 <p>A Creative Urban | Wedding Photographer With Passion</p>
                 <button className="__primary-btn">GET IN TOUCH</button>
             </div>
         </div>
        </div>
        <Services/>

        </>
    );
};

export default Home;