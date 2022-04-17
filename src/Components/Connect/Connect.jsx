import React from 'react';
import './Connect.css'

const Connect = () => {
    return (
        <div className="container mx-auto __connect-wrapper">
            <div className="__connect-container">
            <h2 className="text-center">CONNECT WITH ME</h2>
                <form className='__connect-form'>
                    <input type="text" name="" id="" placeholder="Name" />
                    <input type="number" name="" id="" placeholder="Phone" />
                    <input type="email" name="" id="" placeholder="Email" />
                    <input type="text" name="" id="text-area" placeholder='Message'/>
                    <div className="btn"><button class='__book-btn py-2 px-4'>SUMBIT</button></div>
                </form>
            </div>
        </div>
    );
};

export default Connect;