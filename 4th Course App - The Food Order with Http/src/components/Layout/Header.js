import { Fragment } from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = ({onShowCart}) => {
  return <Fragment>
      <header className={classes.header}>
          <h1>React Meals</h1>
          <HeaderCartButton onClick={onShowCart}/>
      </header>
      <div className={classes['main-image']}>
          <img src={mealsImage} alt="header img"/>
      </div>
  </Fragment>;
};

export default Header