import React from 'react';
import { Link } from 'react-router-dom';
// import styled, { css } from 'styled-components';

const Header = () => {


  return (
    <div className="header">
      <Link to="/">
        <img src="./img/logo.png" className="logo" alt="logo" />
      </Link>
      <ul className="nav-list">
        <Link to="/pokemon" className="nav-link">
          Pokemon
        </Link>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </ul>
    </div >
  );
};




export default Header;