import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='__footer-container'>
            <div className="__footer-logo container">
                <h2>Willam Photography</h2>
            </div>
            <div className="__footer-links">
                <Link className="__footer-link" to='/'>Home</Link>
                <Link className="__footer-link" to='#services'>Services</Link>
                <Link className="__footer-link" to='/blog'>Blog</Link>
                <Link className="__footer-link" to='/login'>Login</Link>
            </div>
        </div>
    );
};

export default Footer;