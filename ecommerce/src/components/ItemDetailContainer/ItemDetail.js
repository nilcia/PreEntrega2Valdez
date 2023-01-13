import { useState, useEffect, useContext } from 'react';
import ItemCount from "./ItemCount";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/Container";
import './itemDetail.css'
import { CartContext } from '../../context/CartContext';

const sucu = require.context("../../image", true);

const ItemDetail = ({ item }) => {
  const { setCart, cartItem } = useContext(CartContext);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    let id = item.id;
    let filterItem = cartItem.filter(item => item.id === id);
    setIsInCart(filterItem.length > 0);
  }, [item.id]);


  const buttonOnAdd = (contador) => {
    if (contador > 0) {
      setIsInCart(setCart(item, contador, isInCart));
    }
  };

  return (
    <Container className="d-flex justify-content-center card-shadow">
      <Row className="justify-content-md-center">

        <Col md="auto">
          <Card border="secondary" className="d-flex justify-content-center card-container" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={sucu(`./${item.image}`)} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                {item.description}
                <br />
                <strong>Precio: GS.{item.price} </strong>
              </Card.Text>
              <ItemCount stock={item.stock} onClick={buttonOnAdd} isInCart={isInCart} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;