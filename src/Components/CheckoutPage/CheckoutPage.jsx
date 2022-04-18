import React from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useServices from '../../Hooks/useServices';
import './CheckoutPage.css'

const CheckoutPage = () => {
    const params = useParams();
    const [services] = useServices();

    const selectedService = services.find(service => service.slug === params.service);

    return (
        <div className=' container w-50 __checkout-container'>
            <h2 className='text-center my-5 fs-1 fw-bold'>Checkout Page</h2>

            <div className="selected-service-details my-4 text-center">
                <h4 className="text-center">{selectedService?.name}</h4>
                <img src={selectedService?.image} alt=""/>
                <p className="fs-4 fw-bold">Price : <span className="fw-normal">{selectedService?.price} $</span> </p>

            </div>
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