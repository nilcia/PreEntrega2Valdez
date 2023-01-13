import React, { useState } from 'react';

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState({
    countItem: 0,
    nameItem: '',
    priceItem: 0,
    totalItem: cartNumber * priceItem
  });

  const cartNumber = () => {
    const { countItem, nameItem, priceItem, totalItem } = cartNumber;
    return countItem;
  };

  const setCart= (obj) => {
    setCartItem(obj);
  };

  return (
    <CartContext.Provider value={{ cartItem, setCartItem, cartNumber, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };