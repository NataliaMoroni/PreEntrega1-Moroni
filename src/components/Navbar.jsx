import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "./Logo";
import CartWidget from "./CartWidget";


function BasicExample() {
  return (
    <>
    <Navbar className="navBg" variants="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        <Logo/>
        
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="#home" >Home</Nav.Link>
            <Nav.Link href="#tienda">Tienda</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
 
  </>
  );
  
}

export default BasicExample;

