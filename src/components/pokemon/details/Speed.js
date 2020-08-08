import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Span, Type } from '../Pokemon.style';

const PokemonSpeed = ({ url }) => {
  const [speed, setSpeed] = useState(null);

  useEffect(() => {
    const fetchSpeed = async () => {
      const result = await axios.get(url);
      setSpeed(result.data.stats[5].base_stat);
    };
    fetchSpeed();
  }, [url]);
  return (
    <>
      {speed !== null ? (
        <Type >Speed: <Span>{speed}</Span></Type>
      ) : (
          "loading..."
        )}
    </>
  );
};

export default PokemonSpeed;