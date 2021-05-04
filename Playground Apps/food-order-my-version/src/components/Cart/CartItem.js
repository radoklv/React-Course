import styles from './CartItem.module.css';
import AppContext from '../../store/app-context';
import {useContext} from 'react';

const CartItem = ({item}) => {
    const context = useContext(AppContext);

    return (
        <li className={styles['cart-item']}>
            <div>
                <h5>{item.name}</h5>
                <span className={styles['item-price']}>{item.price}$</span>
                <span className={styles['item-qty']}>x{item.quantity}</span>
            </div>
            <div>
                <button onClick={()=> context.decrementQty({id: item.id, quantity: item.quantity})}>-</button>
                <button onClick={() => context.incrementQty(item.id)}>+</button>
            </div>
        </li>
    )
}

export default CartItem
