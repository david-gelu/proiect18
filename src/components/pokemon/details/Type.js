import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Type, Span } from '../Pokemon.style';

const PokemonTypes = ({ url }) => {
  const [type, setType] = useState(null);

  useEffect(() => {
    const fetchTypePokemon = async () => {
      const result = await axios.get(url);
      setType(result.data.types[0].type.name);
      // console.log(result.data.types[0].type.name)
    };
    fetchTypePokemon();
  }, [url]);
  return (
    <>
      {type !== null ? (
        <Type >Type : <Span> {type}</Span></Type>
      ) : (
          "loading..."
        )}
    </>
  );
};

export default PokemonTypes;