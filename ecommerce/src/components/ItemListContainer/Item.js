import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './item.css';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

const sucu = require.context("../../image", true);
const Item = ({ item }) => {
    return (
        <Link to={`/item/${item.id}`}>
            <Col>
                <Card border="secondary">
                    <Card.Img variant="bottom" className="image-container" src={sucu(`./${item.image}`)} />
                    <Card.Body>
                        <Card.Title>{item.name} </Card.Title>
                        <Button variant="secondary" size="sm">Ver Detalle</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Link>
    );
};

export default Item;