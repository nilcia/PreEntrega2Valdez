import { useState, useEffect } from 'react';
import ItemList from './CategoryList';
import { itemsResults } from '../ItemListContainer/constants';

const promesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve(itemsResults)
  }, 2000)
})

const ItemListContainer = ({ id }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    promesa.then((res) => {
      console.log("res: " + id);
      setItems(res.filter(item =>  item.category == id))
      console.log(items);
    });
  }, [id]);

  return (
    <ItemList items={items} />
  );
};

export default ItemListContainer;