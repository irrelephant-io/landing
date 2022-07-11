import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/img/logo.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logo} alt="🐘" />
            <div>
              <h1>Irrelephant Studios</h1>
              <p>Norway</p>
            </div>
          </div>
        </Link>
        <div className="header__right"></div>
      </div>
    </div>
  );
};

export default Header;
