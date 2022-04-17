import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
     <Navbar collapseOnSelect expand="lg" variant="dark" className="__header-container">
  <Container>
  <Navbar.Brand href="/" className="__logo">William P.</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Link className="__nav-link" to='/'>Home</Link>
      <a href="#services" className='__nav-link'>Services</a>
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
