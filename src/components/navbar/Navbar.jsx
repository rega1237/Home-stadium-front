/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { logout } from '../../redux/usersReducer/usersReducer';
import './navbar.css';

const Navbar = () => {
  const [isMenuActive, setMenuState] = useState(false);

  const toggleMenu = () => {
    setMenuState(!isMenuActive);
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <button type="button" className="menu-button" onClick={toggleMenu}>
        <span />
        <span />
      </button>
      <nav className={isMenuActive ? 'navbar' : 'navbar hidden'}>
        <Link to="/" className="logo">
          <img src='../../../src/assets/static/t-logo.png' alt="logo" />
        </Link>
        <ul className="links">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/my-reservations">My Reservations</NavLink>
          </li>
          <li>
            <NavLink to="/stadiums">Manage Stadiums</NavLink>
          </li>
          <li>
            <Link href="" onClick={() => handleLogout()}>Log Out</Link>
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
