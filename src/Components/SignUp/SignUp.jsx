import React, {  useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";
import { useSendEmailVerification } from 'react-firebase-hooks/auth';



const SignUp = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);

  //user input value references
  const signupEmail = useRef(null)
  const signupUsername = useRef(null)
  const signupPassword = useRef(null)
  const signupConfirmPassword = useRef(null)
  
  //user input errors
  const [passError, setPassError] = useState('')

  const navigate = useNavigate();



  const [terms, setTerms] = useState(true)
 

  const [sendEmailVerification, verificationSending, verificationError] = useSendEmailVerification(auth);

    const handleSignUp = async(e) => {
        e.preventDefault();
        if(signupPassword.current.value !== signupConfirmPassword.current.value){
          setPassError('Passwords do not match')
          return;
        }else{
          setPassError('')
          await createUserWithEmailAndPassword(signupEmail.current.value, signupPassword.current.value);
          await updateProfile({displayName: signupUsername.current.value});
          await sendEmailVerification();
          
        }
        
        
        

    }
    if(user){
      navigate('/');
     
    }
    

    return (
        <div>
             <div className="my-5 __login-wrapper">
        <div className="__login-form-container container mx-auto w-50">
        <h2 className="text-center fw-bold fs-1 mb-4">Register</h2>
        <Form onSubmit={handleSignUp}>
        <Form.Group className="mb-3" >
          <Form.Control type="email" required placeholder="Enter email" ref={signupEmail} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Control type="text" required placeholder="Enter Username" ref={signupUsername} />
          <Form.Text className="text-muted">
            We'll never share your data with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Control type="password" required placeholder="Password" ref={signupPassword}  />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Control type="password" required placeholder="Confirm Password" ref={signupConfirmPassword} />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Check type="checkbox" required label="Accept Terms and Conditions" onClick={()=>{
           setTerms(!terms);

        }}  />
        </Form.Group>
        {loading ? <p className="text-success">loading...</p> : ''}
        <p className="text-danger">{passError || error?.message}</p>
      <div className="__login-btn-container d-flex flex-row align-items-center">
      <input type='submit' className="__book-btn px-4 py-2" disabled={terms ? true : ''} value='Register' />
       <p className='mt-3 ps-2 fs-6'>Already have an account ? <Link to='/login' className="text-info">Log in</Link></p>
      </div>
     
      </Form>
    
        </div>
     
        </div>
   
     
        
        </div>
    );
};

export default SignUp;