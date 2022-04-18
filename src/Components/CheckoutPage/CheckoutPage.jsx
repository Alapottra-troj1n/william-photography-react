import React from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './CheckoutPage.css'

const CheckoutPage = () => {
    const params = useParams();

    return (
        <div className='my-5 container w-50 __checkout-container'>
        


        <Form>

                <Form.Group className="mb-3" >
                <Form.Control type="email" required placeholder="Email Address" />
                </Form.Group>

                <Form.Group className="mb-3" >
                <Form.Control type="text" required placeholder="Your Name"  />
                </Form.Group>

                <Form.Group className="mb-3" >
                <Form.Control type="text" required placeholder="Shipping Address" />
                </Form.Group>

                <div className="__login-btn-container d-flex flex-row align-items-center">
                    <input type='submit' className="__book-btn px-4 py-2"  value='Proceed to Payment' />
                </div>
     

     </Form>


        </div>
    );
};

export default CheckoutPage;