import React from 'react';
import './Connect.css'

const Connect = () => {
    return (
        <div className="container mx-auto __connect-wrapper">
            <div className="__connect-container">
            <h2 className="text-center">CONNECT WITH ME</h2>
                <div className='__connect-form'>
                    <input type="text"  placeholder="Name" />
                    <input type="number" placeholder="Phone" />
                    <input type="email" placeholder="Email" />
                    <input type="text"  placeholder='Message'/>
                    <div className="btn"><button className='__book-btn py-2 px-4'>SUMBIT</button></div>
                </div>
            </div>
        </div>
    );
};

export default Connect;