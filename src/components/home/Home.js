import React, { useState, useEffect } from 'react';
import axios from 'axios';


import PokeImg from './PokemonImg';
import { Main, Title, PokemonDiv, PokemonWrap, Alink, Figure, Paragraph, Span, Image } from './Home.style';



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
        {pokemon.map(({ name, id, }) => (
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
        ))}
      </PokemonDiv>
    </Main>
  );
}

export default Home;