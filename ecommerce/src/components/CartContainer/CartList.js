import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { XCircle } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/esm/Button';
import { CartContext } from '../../context/CartContext';
import {useContext } from 'react';

const CartList = ({ items, totalQuantity, totalMount }) => {
    const { removeItem, clear } = useContext(CartContext);

    const removeItemCard = (ev) => {
        removeItem(ev.target.value);
    };

    const clearCard = () => {
        clear();
    }

    return (
        <div>
            <h1>Listado de Items</h1>
            <Row>

                <Col xs={6}>Articulo </Col>
                <Col >Precio</Col>
                <Col>Cantidad</Col>
                <Col>Total</Col>
                <Col></Col>
            </Row>
            {items.map((item) => (
                <Row key={item.id}>
                    <Col xs={6}>{item.name} </Col>
                    <Col >{item.price} </Col>
                    <Col>{item.contador}</Col>
                    <Col>{item.contador * item.price}</Col>
                    <Col>
                        <Button variant="dark" value={item.id} onClick={removeItemCard}>
                            Elminar</Button> </Col>
                </Row>
            ))
            }
            <br />
            <p>Cantidad Total de Articulos: {totalQuantity}</p>
            <p>Monto Total a Pagar: {totalMount}</p>
            <Button variant="dark" onClick={clearCard}>Vaciar Carrito</Button>
        </div>
    );
};

export default CartList;
