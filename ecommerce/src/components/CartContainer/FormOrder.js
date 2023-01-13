import { useState, useContext } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormOrder = () => {

  const { cartItem, totalMount, setFormId } = useContext(CartContext);

  const [form, setForm] = useState({
    buyer: {},
    items: {},
    total: 0
  });

  const [buyer, setBuyer] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const submitHandler = (ev) => {
    ev.preventDefault();

    const db = getFirestore();
    const formsCollection = collection(db, 'forms');

    addDoc(formsCollection, form).then((snapshot) => {
      setForm({
        buyer: {},
        items: {},
        total: 0
      });
      setFormId(snapshot.id);
    });
  };

  const changeHandler = (ev) => {
    const { value, name } = ev.target;
    console.log(ev);
    setBuyer({ ...buyer, [name]: value });
    const order = {
      buyer: buyer,
      items: cartItem,
      total: totalMount
    }
    console.log("Buyer");
    console.log(buyer);
    setForm(order);
    console.log("order");
    console.log(order);
  };

  return (
    
        <Form onSubmit={submitHandler}>
          <h1>Datos del comprador</h1>
          <Form.Group className="mb-3">
            <Form.Label >Nombre y Apellido</Form.Label>
            <Form.Control 
            placeholder="Ingrese Nombre y Apellido"
            name="name"
            id="name"
            value={buyer.name} 
            onChange={changeHandler}/>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Correo electronico</Form.Label>
            <Form.Control 
            type="email" 
            name="email"
            id="email"
            placeholder="Ingrese email" 
            value={buyer.email} 
            onChange={changeHandler}/>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Telefono</Form.Label>
            <Form.Control 
            placeholder="Ingrese Telefono" 
            value={buyer.phone} 
            name="phone"
            id="phone"
            onChange={changeHandler}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Realizar Pedido
          </Button>
        </Form>
  );

}

export default FormOrder;