import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Google } from '../../assets/google-brands.svg';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import "./Login.css";
import auth from "../../firebase.init";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleLoading, googleError] = useSignInWithGoogle(auth);

  //user value references
  const loginEmail = useRef(null);
  const loginPassword = useRef(null);
  const navigate = useNavigate();


  const [sendPasswordResetEmail, resetSending, resetError] = useSendPasswordResetEmail(auth);





 


  const handleLogin = async(e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(loginEmail.current.value, loginPassword.current.value);
  

  }

  const handlePasswordReset = () => {
    const email = loginEmail.current.value;
    if(email){
      sendPasswordResetEmail(email)
      toast('Password Reset Link Sent')
    }else{
      toast('Please enter your email')

    }
    

  }


  if(user){
    navigate('/')
  }

  return (
    <div className="my-5 __login-wrapper">
      <ToastContainer />
        <div className="__login-form-container container mx-auto w-50">

        <h2 className="text-center fw-bold fs-1 mb-4">Login</h2>
        <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Control type="email" required placeholder="Enter Email" ref={loginEmail} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Control type="password" required placeholder="Enter Password" ref={loginPassword} />
        </Form.Group>
        <Form.Group className="mb-3">
        
        </Form.Group>
        {loading ? <p className="text-success">loading...</p> : ''}
        {error ? <p className='text-danger'>{error.message}</p> : ''}
        {googleError ? <p className='text-danger'>{googleError.message}</p> : ''}
      <div className="__login-btn-container d-flex flex-row align-items-center">
      <input value='Login' type="Submit" className="__book-btn px-4 py-2" />
       <p className='mt-3 ps-2 fs-6'>New to me ? <Link to='/signup' className="text-info">Create a new account</Link></p>
      </div>
      <p>Forgot your password ?</p>
      <button className="reset-pass-btn"onClick={handlePasswordReset}>reset password</button>
      </Form>

        <div className="social-login mt-5 text-center">
            <button className="__google-signin-btn" onClick={()=> signInWithGoogle()}> Sign In with Google <Google className="__google-brand" /> </button> 
        </div>
        </div>
        <img src="../../assets/google-brands.svg" alt="" />
     
    </div>
  );
};

export default Login;
