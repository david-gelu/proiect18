import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';


import PokeImg from './PokemonImg';


// style components

const Main = styled.div`
  max-width: 70%;
  margin: 0 auto ;
  background:#F7F6F1;
  padding: 5rem 0 !important;
  display: flex;
  flex-direction: column;  
`
const PokemonDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`
const PokemonWrap = styled.div`
  flex: 1 1 21.94%;
  margin: 20px;
`
const Figure = styled.figure`
  margin: 0 auto;
  position: relative;
  padding: .3rem;
  background:#F6F5F0;
  box-shadow: 0px 0px 10px #D59203;
`

const Paragraph = styled.p`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-family: 'Courier New', Courier, monospace;
  letter-spacing: 5px;
  background:#D59203;
  padding: .1rem ;
  font-size: 1rem;
`
const Span = styled.span`
// color: #222;
`

const Home = () => {

  const [pokemon, setPokemonData] = useState([]);

  useEffect(() => {
    const makePokemon = () => {

      axios
        .get('https://pokeapi.co/api/v2/pokemon/')
        .then(result => {
          setPokemonData(result.data.results);
        });
    };
    makePokemon();
  }, []);

  return (
    <Main className="main">
      <h1>pokemoane</h1>
      <PokemonDiv className="pokemon">
        {pokemon.map(({ name, id, front_default, url }) => {
          return (
            <PokemonWrap className="pokemon-wrap">
              <Figure className="pokemon-container" key={name}>
                <a href="/pokemon">
                  <PokeImg />
                  <figcaption>
                    <Paragraph className="pokemon-detail">Name:
                      <Span className="pokemon-name">{name}</Span>
                    </Paragraph>
                  </figcaption>
                </a>
              </Figure>
            </PokemonWrap>
          );
        })}
      </PokemonDiv>
    </Main >
  );
}

export default Home;