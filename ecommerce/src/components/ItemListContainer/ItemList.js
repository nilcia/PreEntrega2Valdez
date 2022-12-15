import Item from './Item';
import Row from 'react-bootstrap/Row';

const ItemList = ({ items }) => {
  return (
    // <div className="d-flex justify-content-center">
      <Row xs={1} md={6} className="g-4 justify-content-md-center">
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </Row>
    // </div>
  );
};

export default ItemList;
