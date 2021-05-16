import { useState } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

import Dropdown from './Dropdown';

const Navigation = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const toggleNavHandler = () => {
    setToggleNav(oldState => !oldState);

    toggleNav ? document.body.classList.remove('fixed') : document.body.classList.add('fixed');
  };

  const closeMenuHandler = () => {
    setToggleNav(false);
  };

  const toggleDropdownHandler = () => {
    setToggleDropdown(!toggleDropdown);
    if (!window.innerWidth < 500) {
      return;
    }
    setToggleDropdown(!toggleDropdown);
  };

  const onMouseEnterHandler = () => {
    setToggleDropdown(true);
  };

  const onMouseLeaveHandler = () => {
    setToggleDropdown(false);
  };

  return (
    <header className="header">
      <h1>LOGO</h1>
      <nav className={toggleNav ? 'active' : ''}>
        <ul>
          <li onClick={closeMenuHandler}>
            <Link to="/">Home</Link>
          </li>
          <li
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
            onClick={toggleDropdownHandler}
          >
            <Link to="/">
              Products <IoIcons.IoMdArrowDropdown />
            </Link>
            {toggleDropdown && <Dropdown onClick={closeMenuHandler} />}
          </li>
          <li onClick={closeMenuHandler}>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li onClick={closeMenuHandler}>
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
      </nav>
      {toggleNav && <AiIcons.AiOutlineClose className="toggle-menu" onClick={toggleNavHandler} />}
      {!toggleNav && <AiIcons.AiOutlineMenu className="toggle-menu" onClick={toggleNavHandler} />}
    </header>
  );
};

export default Navigation;
