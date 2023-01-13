import { useContext } from 'react';
import { Cart } from 'react-bootstrap-icons';
import { CartContext } from '../../context/CartContext';

const CardWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    return (
        <div>
            
            <p><Cart
                color="white"
                size={30}
            /> {totalQuantity}</p>
        </div>

    );
};

export default CardWidget;