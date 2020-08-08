import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Type, Span } from '../Pokemon.style';

const PokemonAbility = ({ url }) => {
  const [ability, setAbility] = useState(null);

  useEffect(() => {
    const fetchAbilityPokemon = async () => {
      const result = await axios.get(url);
      setAbility(result.data.abilities[0].ability.name);
    };
    fetchAbilityPokemon();
  }, [url]);
  return (
    <>
      {ability !== null ? (
        <Type >Ability : <Span> {ability}</Span></Type>
      ) : (
          "loading..."
        )}
    </>
  );
};

export default PokemonAbility;