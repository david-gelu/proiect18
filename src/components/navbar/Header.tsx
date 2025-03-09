import React from 'react';
import { Link } from 'react-router-dom';

import { Nav, Ul, Li, Image } from './Navbar.style';


const Header = () => {

  return (
    <Nav>
      <Link to="/">
        <Image src="./img/logo.png" alt="logo" />
      </Link>
      <Ul>
        <Link to="/">
          <Li>Home</Li>
        </Link>
        <Link to="/pokemon">
          <Li>Pokemon</Li>
        </Link>
      </Ul>
    </Nav >
  );
};




export default Header;