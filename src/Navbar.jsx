import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFilm, faTv, faList } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate=useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };
  return (
    <div className="navbar">
      <div className="logo">
        <span className="logo-text">Movie App</span>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <a href="/"><FontAwesomeIcon icon={faHome} /> Home</a>
          </li>
          <li>
            <a href="#"><FontAwesomeIcon icon={faList} /> Watchlist</a>
          </li>
          <li
            className={`dropdown ${isDropdownOpen ? 'open' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="dropdown-toggle">
              <FontAwesomeIcon icon={faFilm} /> Movies
            </div>
            <div className="dropdown-menu">
              <ul>
                <li>
                  <Link to="/movies/now-playing">Now Playing</Link>
                </li>
                
                <li>
                <Link to="/popular">Popular</Link>
              </li>
                <li>
                  <Link to="/movies/upcoming">Upcoming</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/movies"><FontAwesomeIcon icon={faFilm} /> Movies</Link>
          </li>
          <li>
            <a href="#"><FontAwesomeIcon icon={faTv} /> Series</a>
          </li>
        </ul>
      </div>
      <div className="user-account">
        <span onClick={()=>navigate("/login")}>User Account</span>
      </div>
    </div>
  );
};

export default Navbar;
