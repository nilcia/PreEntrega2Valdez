import React, { useState, useEffect } from 'react';
import { PlusCircle, DashCircle } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

const ItemCount = ({ onClick, stock }) => {
  const [contador, setContador] = useState(0);

  const onAdd = () => {
    console.log('launch ' + contador);
    onClick(contador);
  };

  const buttonIncreaseCount = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const buttonReducesCount = () => {
    if (contador > 0) {
      setContador(contador - 1);
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
        <Col>
          <Link to={`/cart`} style={{ textDecoration: "none" }}>
            <Button variant="dark" onClick={onAdd}>Agregar</Button>
          </Link>
        </Col>
      </Row>
    </Container>

  );
};

export default ItemCount;
