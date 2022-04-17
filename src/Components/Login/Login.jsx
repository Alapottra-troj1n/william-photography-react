import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as Google } from '../../assets/google-brands.svg';

import "./Login.css";

const Login = () => {
  return (
    <div className="my-5 __login-wrapper">
        <div className="__login-form-container container mx-auto w-50">

        <h2 className="text-center fw-bold fs-1 mb-4">Login</h2>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3">
        
        </Form.Group>
      <div className="__login-btn-container d-flex flex-row align-items-center">
      <button className="__book-btn px-4 py-2">Login</button>
       <p className='mt-3 ps-2 fs-6'>New to me ? <Link to='/signup' className="text-info">Create a new account</Link></p>
      </div>
      </Form>
        <div className="social-login mt-5 text-center">
            <button className="__google-signin-btn"> Sign In with Google <Google className="__google-brand" /> </button> 
        </div>
        </div>
        <img src="../../assets/google-brands.svg" alt="" />
     
    </div>
  );
};

export default Login;
