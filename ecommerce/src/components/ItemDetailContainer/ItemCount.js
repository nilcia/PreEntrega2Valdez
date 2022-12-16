import React, { useState, useEffect } from 'react';
import { PlusCircle, DashCircle } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';

const ItemCount = ({stock}) => {
  const [contador, setContador] = useState(0);

  const buttonIncreaseCount = () => {
    if(contador<stock){
      setContador(contador + 1);
    }
  };

  const buttonReducesCount = () => {
    if(contador > 0){
        setContador(contador - 1);
    }
  };

  const buttonOnAdd = () => {
    if(contador!==0){
      console.log("Agregó la cantidad de items: " + contador);
    }
    
  };
  useEffect(() => {
    console.log('el estado contador cambió');
  }, [contador]);

  return (
    <Container>
      <Row>
        <Col>
        <p>
        <DashCircle
            color="#212529"
            size={20}
            onClick={buttonReducesCount}
        />
        &nbsp;&nbsp;{contador}&nbsp;&nbsp;   
        <PlusCircle
            color="#212529"
            size={20}
            onClick={buttonIncreaseCount}
        />
       </p>
        </Col>
        <Col><Button variant="dark" onClick={buttonOnAdd}>Agregar</Button></Col>
      </Row>
      </Container>
    
  );
};

export default ItemCount;
