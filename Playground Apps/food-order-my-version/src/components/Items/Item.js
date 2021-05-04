import { useContext, useState } from 'react';
import style from './Item.module.css';
import AppContext from '../../store/app-context';

const Item = ({ item }) => {
  const [amount, setAmount] = useState(1)
  const context = useContext(AppContext);

  const addToCartHandler = () => {
    if (+amount < 1 || +amount > 10 || amount == undefined) {
      alert('You need to choose amount from 1 to 10');
      return;
    }

    const newItem = {
      id: item.id,
      name: item.name,
      description: item.description,
      price: item.price,
      quantity: amount,
    };
    context.addMealHandler(newItem);
  };

  return (
    <li className={style.item}>
      <div className={style['item-content']}>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <span>{item.price}$</span>
      </div>
      <div className={style['item-action']}>
        <div className={style['item-action-input']}>
          <label htmlFor="amount">Amount</label>
          <input
            min="1"
            max="10"
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button onClick={addToCartHandler}>Add</button>
      </div>
    </li>
  );
};

export default Item;
