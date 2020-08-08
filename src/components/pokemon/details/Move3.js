import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Span, Special } from '../Pokemon.style';

const PokemonThirdMove = ({ url }) => {
  const [move, setMove] = useState(null);

  useEffect(() => {
    const fetchMovePokemon = async () => {
      const result = await axios.get(url);
      setMove(result.data.moves[3].move.name);
    };
    fetchMovePokemon();
  }, [url]);
  return (
    <>
      {move !== null ? (
        <Special >Move 3 : <Span> {move}</Span></Special>
      ) : (
          "loading..."
        )}
    </>
  );
};

export default PokemonThirdMove;