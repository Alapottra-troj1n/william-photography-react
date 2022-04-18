import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";

const Header = ({bg}) => {

  // const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const currentLocation = useLocation();

  return (
    <>
     <Navbar collapseOnSelect expand="lg" variant="dark" bg={bg} className="__header-container">
  <Container>
  <Link to="/" className="__logo">William P.</Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Link className="__nav-link" to='/'>Home</Link>
      <a className="__nav-link" href='#services'>Services</a>

      {/* <button className='btn btn-link __nav-link-btn' onClick={()=>{
        navigate('/#services')
      }}>Services</button> */}

       <Link className="__nav-link" to='/blog'>Blog</Link>
      {user  ? <button className='__logout-btn' onClick={()=> signOut(auth)}>Logout</button> : <Link className="__nav-link" to='/login'>Login</Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
{user && currentLocation.pathname === '/' ? <div className=' container mt-3 __welcome-back'>


  <p>Welcome Back <span className='fw-bold current-user-username text-warning'>{user?.displayName}</span> </p>
  
</div> : ''}
    </>
  );
};



export default Header;
