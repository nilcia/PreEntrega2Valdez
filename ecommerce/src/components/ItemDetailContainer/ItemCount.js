import React, { useState, useEffect } from 'react';
import { PlusCircle, DashCircle } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

const ItemCount = ({ onClick, stock, isInCart }) => {
  const [contador, setContador] = useState(0);

  console.log('isInCart ' + isInCart);
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
      {stock > 0 ?

        <Row>

          {isInCart ?
            <div>
              <p>El artículo ya fué agregado</p>
              <Link to={`/cart`} style={{ textDecoration: "none" }}>
                <Button variant="dark">Terminar mi compra</Button>
              </Link>
            </div>
            :
            <Col>
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
              {contador > 0 ?
                < Link to={`/cart`} style={{ textDecoration: "none" }}>
                  <Button variant="dark" onClick={onAdd} >Agregar al Carrito</Button>
                </Link>
                :
                <Button variant="dark" disabled >Agregar al Carrito</Button>
              }
            </Col>
          }
        </Row>
        :
        <p>El artículo no tiene Stock</p>
      }
    </Container >

  );
};

export default ItemCount;
