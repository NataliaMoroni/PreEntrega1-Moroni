import React from "react";
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ItemCount from "./ItemCount";

{/*function BasicExample()*/} 
export default function Item({ item }){

    const onAdd =(quantity) =>{
    console.log(`Seleccionaste ${quantity} unidades`); 
    }  
  return (
    <>
      <Row xs={1} md={3} className="g-2">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
    {/*<div className="container">
    <div className="row">
      <div className="col-m-6">*/}
    <Card style={{ width: '18rem' }}>
   
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
        {item.category}
        <br />
        Precio:
        {item.precio}
        </Card.Text>
        <Button variant="secundary">
            <Link to={"/item/" + item.id}>IR AL ITEM</Link>
        </Button>
        <ItemCount initial={0} stock={7} onAdd={onAdd} />
        
      </Card.Body>
    </Card>
    </Col>
      ))}
    </Row>

    </>
  );
}

{/*export default BasicExample;*/}

{/*export default function Item({ item }) {
  return (
    <div  key={item.id}>
      {JSON.stringify(item)}
      <Link to={"/item/" + item.id}>IR AL ITEM</Link>
      <br />
      <br />
    </div>
  );
}*/}
