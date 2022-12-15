import ItemCount from "./ItemCount";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './itemDetail.css'

const sucu = require.context("../../image", true);
const ItemDetail = ({ item }) => {
  console.log("Entra a ItemDetail")  
  console.log(item)
    return (
      // <Link to={`/item/${item.id}`}>
      <div class="d-flex justify-content-center card-shadow">
        <Card border="secondary" className="text-center" style={{ width: '20rem' }}>
          <Card.Img variant="top" src={sucu(`./${item.image}`)} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              {item.description}
              <br/>
              <strong>Precio: {item.price} GS.</strong>
            </Card.Text>
            <br/>
            <ItemCount stock={item.stock}/>
          </Card.Body>
        </Card>
        </div>
      // </Link>
    );
  };
  
  export default ItemDetail;