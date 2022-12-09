import ItemList from './ItemList';
import { itemsResults } from './constants';
import { useState, useEffect } from 'react';

const promesa = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(itemsResults)
    }, 2000)
})

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        promesa.then((res)=>{
            console.log("res" + res);
            setItems(res);
            console.log("items" + items);
        });
    }, [items]);

    return (
        <ItemList items={items} />
    );
};

export default ItemListContainer;