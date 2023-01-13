import React, { useState, useEffect } from 'react';

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalMount, setTotalMount] = useState(0);
  const [formId, setFormId] = useState('');

  const setCart= (item, contador, isInCart) => {
    let id= item.id;
    let filterItem = cartItem.filter(item => item.id === id);
    if(filterItem.id != id){
      setCartItem([...cartItem, { ...item, contador,isInCart }]);
      setTotalQuantity(totalQuantity + contador)
      setTotalMount(totalMount + (contador * item.price));
      return isInCart;
    }else{
      return !isInCart
    }
    
  };

  const removeItem = (id) => {
    let updateItems = cartItem.filter(item => item.id !== id);
    
    if(updateItems.length===0){
      setTotalQuantity(0);
      setTotalMount(0);
    }else{
      let filterItems = cartItem.filter(item => item.id === id);
      console.log(filterItems);
      console.log(totalQuantity);
      console.log(filterItems[0].contador);
      setTotalQuantity( Number(totalQuantity) -  Number(filterItems[0].contador));
      setTotalMount(totalMount - (filterItems[0].contador*filterItems[0].price));
    }
    setCartItem(updateItems);
  }

  const clear = () => {
    setCartItem([]);
    setTotalQuantity(0);
    setTotalMount(0);
  }

  useEffect(() => {
    setCartItem([]);
    setTotalQuantity(0);
    setTotalMount(0);
  }, [formId]);


  return (
    <CartContext.Provider value={{ cartItem, setCartItem, setCart, removeItem, clear, setFormId, formId, totalQuantity, totalMount }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };