import Item from './Item';
import Row from 'react-bootstrap/Row';

const ItemList = ({ items }) => {
  return (
    <Row xs={1} md={6} className="g-4">
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </Row>
  );
};

export default ItemList;
