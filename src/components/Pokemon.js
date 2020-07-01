import React from 'react';
import styled from 'styled-components';

import PokeImg from './PokemonImg';

const Main = styled.div`
  max-width: 70%;
  margin: 0 auto ;
  padding: 5rem 0 !important;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  display: flex;
  background: #F7F6F1;
  justify-content: start; 
  flex-direction:column;  
`
const Img = styled.div` 
  margin: 20px auto;
  border-radius:40px;
  box-shadow:0px 0px 5px 2px #D59203;
`

const Container = styled.div`
  display:flex;
  justify-content:space-between;
  flex-direction:row;
  width:100%;
  background: ##F7F6F1;
`
const ContainerType = styled.div`
  position:relative;
  box-shadow:0px 0px 5px #D59203;
  width:50%;
  margin:.7rem .3rem;
  display:flex;
  align-items:flex-start;
  justify-content:center;
  flex-direction:column;
  text-align:center;
`
const Type = styled.div`
  margin-top:.7rem;
  margin-left:.5rem;
  padding:.5rem 1rem;
  background:#219E40;
  color:#222;
  border-radius:5px;
`
const ContainerSpecial = styled.div`
  position:relative;
  box-shadow:0px 0px 5px #D59203;
  width:50%;
  margin:.7rem .3rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  text-align: center;
`
const Special = styled.div`
  margin:.7rem 0 .7rem .5rem;
  padding:.5rem 1rem;
  background:#219E40;
  color:#222;
  border-radius:5px;  
}
`

const Pokemon = () => {
  return (
    <Main className="main">
      <h1>pokemoane</h1>
      <Img>
        <PokeImg />
      </Img>
      <Container className="container">
        <ContainerType className="container-type">
          <Type className="type">type <span className="type-color1"></span></Type>
          <Type className="type">type <span className="type-color2"></span></Type>
        </ContainerType>
        <ContainerSpecial className="container-special">
          <Special className="special">special <span className="special-color1"></span></Special>
          <Special className="special">special <span className="special-color2"></span></Special>
          <Special className="special">special <span className="special-color3"></span></Special>
        </ContainerSpecial>
      </Container>
      <Container className="container">
        <ContainerType className="container-type">
          <Type className="type">type <span className="type-color1"></span></Type>
          <Type className="type">type <span className="type-color2"></span></Type>
        </ContainerType>
        <ContainerSpecial className="container-special">
          <Special className="special">special <span className="special-color1"></span></Special>
          <Special className="special">special <span className="special-color2"></span></Special>
          <Special className="special">special <span className="special-color3"></span></Special>
        </ContainerSpecial>
      </Container>
      <Container className="container">
        <ContainerType className="container-type">
          <Type className="type">type <span className="type-color1"></span></Type>
          <Type className="type">type <span className="type-color2"></span></Type>
        </ContainerType>
        <ContainerSpecial className="container-special">
          <Special className="special">special <span className="special-color1"></span></Special>
          <Special className="special">special <span className="special-color2"></span></Special>
          <Special className="special">special <span className="special-color3"></span></Special>
        </ContainerSpecial>
      </Container>
    </Main >
  );
};

export default Pokemon;