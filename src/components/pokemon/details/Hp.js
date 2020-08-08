import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Span, Type } from '../Pokemon.style';

const PokemonHp = ({ url }) => {
  const [health, setHealth] = useState(null);

  useEffect(() => {
    const fetchHpPokemon = async () => {
      const result = await axios.get(url);
      setHealth(result.data.stats[0].base_stat);
    };
    fetchHpPokemon();
  }, [url]);
  return (
    <>
      {health !== null ? (
        <Type >Health : <Span>{health}</Span></Type>
      ) : (
          "loading..."
        )}
    </>
  );
};

export default PokemonHp;