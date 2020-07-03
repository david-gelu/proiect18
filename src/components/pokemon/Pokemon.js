import React from 'react';
import styled from 'styled-components';

import PokeImg from '../home/PokemonImg';
import { Img, Container, ContainerType, Type, ContainerSpecial, Special } from './Pokemon.style'
import { Main, Title } from '../home/Home.style';
import Home from '../home/Home';


const Pokemon = () => {
  return (
    <Main>
      <Title>pokemons</Title>
      <Img>
        <PokeImg />
      </Img>
      <Container>
        <ContainerType>
          <Type className="type">type <span className="type-color1"></span></Type>
          <Type className="type">type <span className="type-color2"></span></Type>
        </ContainerType>
        <ContainerSpecial>
          <Special className="special">special <span className="special-color1"></span></Special>
          <Special className="special">special <span className="special-color2"></span></Special>
          <Special className="special">special <span className="special-color3"></span></Special>
        </ContainerSpecial>
      </Container>
      <Container className="container">
        <ContainerType>
          <Type className="type">type <span className="type-color1"></span></Type>
          <Type className="type">type <span className="type-color2"></span></Type>
        </ContainerType>
        <ContainerSpecial>
          <Special className="special">special <span className="special-color1"></span></Special>
          <Special className="special">special <span className="special-color2"></span></Special>
          <Special className="special">special <span className="special-color3"></span></Special>
        </ContainerSpecial>
      </Container>
      <Container>
        <ContainerType>
          <Type>type <span className="type-color1"></span></Type>
          <Type>type <span className="type-color2"></span></Type>
        </ContainerType>
        <ContainerSpecial>
          <Special>special <span className="special-color1"></span></Special>
          <Special>special <span className="special-color2"></span></Special>
          <Special>special <span className="special-color3"></span></Special>
        </ContainerSpecial>
      </Container>
    </Main >
  );
};

export default Pokemon;