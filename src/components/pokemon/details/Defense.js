import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Span, Type } from '../Pokemon.style';

const PokemonDefense = ({ url }) => {
  const [defense, setDefense] = useState(null);

  useEffect(() => {
    const fetchDefense = async () => {
      const result = await axios.get(url);
      setDefense(result.data.stats[2].base_stat);
    };
    fetchDefense();
  }, [url]);
  return (
    <>
      {defense !== null ? (
        <Type >Defense : <Span>{defense}</Span></Type>
      ) : (
          "loading..."
        )}
    </>
  );
};

export default PokemonDefense;