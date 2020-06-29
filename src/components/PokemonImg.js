import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokeImg = () => {

  const [pokemonImg, setPokemonImg] = useState([]);

  useEffect(() => {
    const imgPokemon = () => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon-form/`)
        .then(result => {
          console.log(result.data.results);
          setPokemonImg(result.data.results);
        });
    };
    imgPokemon();
  }, []);

  return (
    <div>
      {pokemonImg.map(({ front_default }) => {
        return (
          <div>
            <img src={front_default} alt="Pokemon" />
          </div>
        );
      })}
    </div>
  );
};

export default PokeImg;
