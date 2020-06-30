import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokeImg from './PokemonImg';
// import { Link } from 'react-router-dom';

const Home = () => {

  const [pokemon, setPokemonData] = useState([]);

  useEffect(() => {
    const makePokemon = () => {
      axios
        .get('https://pokeapi.co/api/v2/pokemon/')
        .then(result => {
          // console.log(result.data.results, 'ceva 1');
          setPokemonData(result.data.results);
        });
    };
    makePokemon();
  }, []);

  return (
    <div className="main">
      <h1>pokemoane</h1>
      <div className="pokemon">
        {pokemon.map(({ name, id }) => {
          return (
            <div className="pokemon-wrap">
              <figure className="pokemon-container" key={id}>
                <a href="/pokemon">
                  <PokeImg />
                  <figcaption>
                    <p className="pokemon-detail">Name:
                     <span className="pokemon-name">{name}</span>
                    </p>
                  </figcaption>
                </a>
              </figure>
            </div>
          );
        })}
      </div>
    </div >
  );
}

export default Home;