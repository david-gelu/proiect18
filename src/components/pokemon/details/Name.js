import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Type, Span } from '../Pokemon.style';

const PokemonName = ({ url }) => {
  const [name, setName] = useState(null);

  useEffect(() => {
    const fetchNamePokemon = async () => {
      const result = await axios.get(url);
      setName(result.data.forms[0].name);
    };
    fetchNamePokemon();
  }, [url]);
  return (
    <>
      {name !== null ? (
        <Type >Name : <Span> {name}</Span></Type>
      ) : (
          "loading..."
        )}
    </>
  );
};

export default PokemonName;