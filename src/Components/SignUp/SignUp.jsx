import React, {  useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [terms, setTerms] = useState(true)
    const handleSignUp = (e) => {
        e.preventDefault();
        console.log('hi');
    }

    return (
        <div>
             <div className="my-5 __login-wrapper">
        <div className="__login-form-container container mx-auto w-50">
        <h2 className="text-center fw-bold fs-1 mb-4">Register</h2>
        <Form>
        <Form.Group className="mb-3" >
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Control type="text" placeholder="Enter Username" />
          <Form.Text className="text-muted">
            We'll never share your data with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Accept Terms and Conditions" onChange={()=>{
           setTerms(!terms);
           console.log(terms);

        }}  />
        </Form.Group>
      <div className="__login-btn-container d-flex flex-row align-items-center">
      <button className="__book-btn px-4 py-2" disabled={terms ? true : ''} onClick={handleSignUp} >SignUp</button>
       <p className='mt-3 ps-2 fs-6'>Already have an account ? <Link to='/login' className="text-info">Log in</Link></p>
      </div>
      </Form>

        </div>
     
    </div>
            
        </div>
    );
};

export default SignUp;