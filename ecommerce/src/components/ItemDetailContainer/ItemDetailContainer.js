import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { itemsResults } from '../ItemListContainer/constants';

const promesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve(itemsResults)
  }, 2000)
})

const ItemDetailContainer = ({ id }) => {
  const [item, setItem] = useState([]);

  console.log("Detail" + id);
  console.log(item);
  useEffect(() => {
    promesa.then((res) => {
      console.log("filterNumbers");
      console.log(res.filter(itemSearch => itemSearch.id == id));
      setItem(res.filter(itemSearch => itemSearch.id == id))

    });
  }, []);
  console.log("Entra aca: " );
  console.log(item[0]);
  console.log(item.length > 0);
  if (item.length > 0){
    console.log("Entra aca");
    return (
      <ItemDetail item={item[0]} />
    );
    }

};

export default ItemDetailContainer;