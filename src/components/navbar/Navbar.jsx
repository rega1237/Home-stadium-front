import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isMenuActive, setMenuState] = useState(false);

  const toggleMenu = () => {
    setMenuState(!isMenuActive);
  };

  return (
    <>
      <button type="button" className="menu-button" onClick={toggleMenu}>
        <span />
        <span />
      </button>
      <nav className={isMenuActive ? 'navbar hidden' : 'navbar'}>
        <Link to="/" className="logo">
          <img src="https://i.imgur.com/7I9Was5.png" alt="logo" />
        </Link>
        <ul className="links">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">My Reservations</Link>
          </li>
          <li>
            <Link to="/stadiums">Manage Stadiums</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
        <div className="social-media">
          <ul>
            <li>
              <i className="fa fa-facebook-square" />
            </li>
            <li>
              <i className="fa fa-instagram" />
            </li>
            <li>
              <i className="fa fa-twitter" />
            </li>
          </ul>
          <p> All rights reserved 2022 </p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
