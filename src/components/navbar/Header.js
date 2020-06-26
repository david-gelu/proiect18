import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Nav = styled.div`
  max-width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background: grey;
  max-height: 50px;
`

const A = styled.a`
  width: 4rem;
  margin-top: -2px;
  margin-left: -.5rem;
  padding:0;
`
const Ul = styled.ul`
width: 60%;
`

const Li = styled.li`
  float:right;
  margin-top: 2px;
  margin-left: 1rem;
  background: lightgrey;
  padding: .5rem 1rem;
  border-radius: .5rem;
  color: #222;
  transition: ease-in-out .3s;

  &:hover{
    color: #fff;
    background: #222;
  }
`


const Header = () => {


  return (
    <Nav className="header">
      <A>
        <Link to="/">
          <img src="./img/logo.png" className="logo" alt="logo" />
        </Link>
      </A>
      <Ul className="nav-list">
        <Link to="/pokemon" className="nav-link">
          <Li>Pokemon</Li>
        </Link>
        <Link to="/" className="nav-link">
          <Li>Home</Li>
        </Link>
      </Ul>
    </Nav >
  );
};




export default Header;