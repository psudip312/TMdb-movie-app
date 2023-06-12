import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFilm, faTv, faList } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <span className="logo-text">Movie App</span>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <a href="#"><FontAwesomeIcon icon={faHome} /> Home</a>
          </li>
          <li>
            <a href="#"><FontAwesomeIcon icon={faList} /> Watchlist</a>
          </li>
          <li>
            <a href="#"><FontAwesomeIcon icon={faFilm} /> Movies</a>
          </li>
          <li>
            <a href="#"><FontAwesomeIcon icon={faTv} /> Series</a>
          </li>
        </ul>
      </div>
      <div className="user-account">
        <span>User Account</span>
      </div>
    </div>
  );
};

export default Navbar;
