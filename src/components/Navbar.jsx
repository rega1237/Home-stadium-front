import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
       <Link to="/" className='logo'>
          <img src="https://i.imgur.com/7I9Was5.png" alt="logo" />
       </Link>
      <ul className='links'>
        <li>
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
      <div className='social-media'>
        <ul>
          <li>
            <i className="fas fa-shopping-cart" />
          </li>
          <li>
            <i className="fas fa-shopping-cart" />
          </li>
          <li>
            <i className="fas fa-shopping-cart" />
          </li>
        </ul>
        <p> All rights reserved 2022 </p>
      </div>
    </nav>
  );
};

export default Navbar;