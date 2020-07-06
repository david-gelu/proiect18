import React, { useState, useEffect } from 'react';
import axios from 'axios';


import PokeImg from './PokemonImg';
import { Main, Title, PokemonDiv, PokemonWrap, Alink, Figure, Paragraph, Span } from './Home.style';



const Home = () => {

  const [pokemon, setPokemonData] = useState([]);

  useEffect(() => {
    const makePokemon = () => {

      const result = axios
        .get('https://pokeapi.co/api/v2/pokemon/')
        .then(result => {
          setPokemonData(result.data.results);
        });
    };
    makePokemon();
  }, []);

  return (
    <Main>
      <Title>pokemons</Title>
      <PokemonDiv>
        {pokemon.map(({ name, id, front_default, url, abilities }) => {
          return (
            <PokemonWrap>
              <Figure key={name}>
                <Alink href="/pokemon">
                  <PokeImg />
                  <figcaption>
                    <Paragraph>Name:
                      <Span>{name}</Span>
                    </Paragraph>
                  </figcaption>
                </Alink>
              </Figure>
            </PokemonWrap>
          );
        })}
      </PokemonDiv>
    </Main>
  );
}

export default Home;