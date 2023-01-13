import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CartContext } from '../../context/CartContext';
import CartList from './CartList';
import FormOrder from './FormOrder';

const CartContainer = () => {
    const { cartItem, totalQuantity, totalMount, formId } = useContext(CartContext);
    return <div>
        {(typeof formId !== 'undefined') && (formId != '') && (cartItem.length === 0 )? (
            <div>
                <h1>El pedido fue enviado!!</h1>
            </div>
        )
            : (
                <div>
                    {cartItem.length === 0 ? (
                        <h1>Su carrito está vacío!!!</h1>
                    ) : (
                        <Container>
                            <br />
                            <Row className="g-4 justify-content-md-center">
                                <Col>
                                    <CartList items={cartItem} totalQuantity={totalQuantity} totalMount={totalMount} />
                                </Col>
                                <Col>
                                    <FormOrder />
                                </Col>
                            </Row>
                        </Container>
                    )}

                </div>
            )
        }
    </div>;
}

export default CartContainer;