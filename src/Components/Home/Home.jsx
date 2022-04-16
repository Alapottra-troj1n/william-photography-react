import React from 'react';
import Header from '../Navbar/Header';
import './Home.css'

const Home = () => {
    return (
        <div className="__hero-section">
         <Header/>

         <div className="__hero-content">
             <div className="__tagline">
                 <h2>CREATE. CAPTURE. INSPIRE. </h2>
                 <p>A Creative Urban | Wedding Photographer With Passion</p>
             </div>
         </div>
        </div>
    );
};

export default Home;