import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Span, Type } from '../Pokemon.style';

const PokemonAttack = ({ url }) => {
  const [attack, setAttack] = useState(null);

  useEffect(() => {
    const fetchAttack = async () => {
      const result = await axios.get(url);
      setAttack(result.data.stats[1].base_stat);
    };
    fetchAttack();
  }, [url]);
  return (
    <>
      {attack !== null ? (
        <Type >Attack : <Span>{attack}</Span></Type>
      ) : (
          "loading..."
        )}
    </>
  );
};

export default PokemonAttack;