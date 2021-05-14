import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header>
      <Link to="/quotes">
        <h1>React Router</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-quote" activeClassName={classes.active}>
              {' '}
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
