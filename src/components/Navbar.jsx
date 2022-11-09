import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "./Logo";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

{/*const pages=[
  {labe: "Home",Link: "/"},
  {labe: "Tienda",Link: "/tienda"},
  {labe: "Contacto",Link: "/contacto"},
  {labe: "peugeot",Link: "/category/peugeot"},
  {labe: "citroen",Link: "/category/citroen"},
  {labe: "fiat",Link: "/category/fiat"},
];*/}

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
            <Link to={`/`}>Home</Link>
            {/*<Nav.Link href="/" >Home</Nav.Link>*/}
            <Link to={`/tienda`}>Tienda</Link>
            
            {/*<Nav.Link href="/tienda">Tienda</Nav.Link>*/}
            
            <Link to={`/contacto`}>Contacto</Link>
            {/*<Nav.Link href="/contacto">Contacto</Nav.Link>*/}

            <Link to={`/category/peugeot`}>Peugeot</Link>
            <Link to={`/category/citroen`}>Citroen</Link>
            <Link to={`/category/fiat`}>Fiat</Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
 
  </>
  );
  
}

export default BasicExample;

