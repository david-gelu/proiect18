import React, { useState, useEffect } from 'react';
import axios from 'axios';


import PokeImg from './PokemonImg';
import { Main, Title, PokemonDiv, PokemonWrap, Alink, Figure, Paragraph, Span } from './Home.style';
import { Img, Container, ContainerType, Type, ContainerSpecial, Special } from '../pokemon/Pokemon.style'



const Home = () => {

  const [pokemon, setPokemonData] = useState([]);

  useEffect(() => {
    const makePokemon = async () => {
      const result = await axios('https://pokeapi.co/api/v2/pokemon/');
      setPokemonData(result.data.results);
    };
    makePokemon();
  }, []);

  return (
    <Main>
      <Title>pokemons</Title>
      <PokemonDiv>
        {pokemon.map(({ name, url }) => (
          <PokemonWrap>
            <Figure >
              <Alink href="#">
                <PokeImg url={url} key={name} />
                <figcaption>
                  <Paragraph>
                    Name:
                    <Span>{name}</Span>
                  </Paragraph>
                </figcaption>
              </Alink>
            </Figure>
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
              <PokeImg url={url} />
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
          </PokemonWrap>
        ))}
      </PokemonDiv>
    </Main>
  );
}

export default Home;