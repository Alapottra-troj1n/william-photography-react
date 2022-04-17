import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({bg}) => {

  // const navigate = useNavigate();

  return (
    <>
     <Navbar collapseOnSelect expand="lg" variant="dark" bg={bg} className="__header-container">
  <Container>
  <Link to="/" className="__logo">William P.</Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Link className="__nav-link" to='/'>Home</Link>
      <Link className="__nav-link" to='/#services'>Services</Link>

      {/* <button className='btn btn-link __nav-link-btn' onClick={()=>{
        navigate('/#services')
      }}>Services</button> */}

      <Link className="__nav-link" to='/login'>Login</Link>
      <Link className="__nav-link" to='/blog'>Blog</Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  );
};



export default Header;
