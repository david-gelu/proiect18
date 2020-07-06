import React from 'react';

import PokeImg from '../home/PokemonImg';
import { Img, Container, ContainerType, Type, Span, ContainerSpecial, Special } from './Pokemon.style'
import { Main, Title } from '../home/Home.style';


const Pokemon = () => {
  // const pokemons: number = 20;

  // const fetchData = () => {
  //   for (let i = 1; i <= pokemons; i++) {
  //     getPokemon(i);
  //   }
  // };

  // const getPokemon = async (id) => {
  //   const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  //   const pokemon = await data.json();
  //   const pokemonType = pokemon.types
  //     .map((poke) => poke.type.name)
  //     .join(", ");

  //   const transformedPokemon = {
  //     id: pokemon.id,
  //     name: pokemon.name,
  //     image: `${pokemon.sprites.front_default}`,
  //     type: pokemonType
  //   };

  //   Pokemon(transformedPokemon);
  // };


  // fetchData();

  return (
    <Main>
      <Title>pokemons</Title>
      <Container>
        <ContainerType>
          <Type>Name : <Span> text</Span> </Type>
          <Type>Ability : <Span> text</Span> </Type>
          <Type>Form : <Span> text</Span></Type>
          <Type>Species : <Span> text</Span></Type>
        </ContainerType>
        <ContainerType>
          <Special>Move 1: <Span> text</Span></Special>
          <Special>Move 2: <Span> text</Span></Special>
          <Special>Move 3: <Span> text</Span></Special>
          <Special>Move 4: <Span> text</Span></Special>
        </ContainerType>
      </Container >
      <Img >
        <PokeImg />
      </Img>
      <Container>
        <ContainerSpecial>
          <Special>Hp: <Span> text</Span></Special>
          <Special>Attack: <Span> text</Span></Special>
          <Special>Defense: <Span> text</Span></Special>
        </ContainerSpecial>
        <ContainerSpecial>
          <Special>Special-attack: <Span> text</Span></Special>
          <Special>Special-defense: <Span> text</Span></Special>
          <Special>Speed: <Span> text</Span></Special>
        </ContainerSpecial>
      </Container>
    </Main >
  );

};

export default Pokemon;