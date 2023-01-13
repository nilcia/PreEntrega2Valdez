import { useState } from 'react';
import ItemCount from "./ItemCount";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/Container";
import './itemDetail.css'

const sucu = require.context("../../image", true);

const ItemDetail = ({ item }) => {

  const [addItem, setAddItem] = useState(0);
  let x = 0;

  const buttonOnAdd = (contador) => {
      if (contador > 0) {
        console.log("Add1: " + addItem);


        setAddItem(contador);
        console.log("Add1: " + addItem);
        console.log("Addcontador: " + contador);
        setAddItem(5);

        console.log("Add: " + addItem);
      }
  };
  console.log("Entra a ItemDetail")
  console.log(item)
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

              <ItemCount stock={item.stock} onClick={buttonOnAdd} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    // </Link>
  );
};

export default ItemDetail;