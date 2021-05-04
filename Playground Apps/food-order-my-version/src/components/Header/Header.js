import style from './Header.module.css';
import AppContext from '../../store/app-context'
import {useContext, useState} from 'react';
import Cart from '../Cart/Cart'

const Header = () => {

  const context = useContext(AppContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCartHandler = () =>{
    setIsCartOpen((lastState) => !lastState)
  }

  return (
    <div className={style.header}>
      <div className="container">
        <h1>React Meals</h1>
        <button onClick={toggleCartHandler}>{`Cart (${context.cartQty})`}</button>
        {isCartOpen && <Cart onClose={toggleCartHandler}></Cart>}
      </div>
    </div>
  );
};

export default Header;
