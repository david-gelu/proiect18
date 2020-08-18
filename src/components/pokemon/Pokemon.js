import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PokeImg from '../home/PokemonImg';
import { MainPokemon, Img, Container, ContainerType, Type, Span } from './Pokemon.style';
import Loading from '../loading/Loading';

const Pokemon = ({ url }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchDetailPokemon = async () => {
      const result = await axios.get(url);
      setPokemon(result.data);
    };
    fetchDetailPokemon();
  }, [url]);


  return (
    <>
      {pokemon !== null ? (
        <MainPokemon>
          <Container>
            <ContainerType>
              <Type >Name : <Span>{pokemon.forms[0].name}</Span></Type>
              <Type >Type : <Span>{pokemon.types[0].type.name}</Span></Type>
              <Type >Ability : <Span>{pokemon.abilities[0].ability.name}</Span></Type>
            </ContainerType>
            <ContainerType>
              <Type >Move 1 : <Span>{pokemon.moves[0].move.name}</Span></Type>
              <Type >Move 2: <Span>{pokemon.moves[1].move.name}</Span></Type>
              <Type >Move 3 : <Span>{pokemon.moves[3].move.name}</Span></Type>
            </ContainerType>
          </Container>
          <Img>
            <PokeImg url={url} />
          </Img>
          <Container>
            <ContainerType>
              <Type >Health : <Span>{pokemon.stats[0].base_stat}</Span></Type>
              <Type >Attack : <Span>{pokemon.stats[1].base_stat}</Span></Type>
              <Type >Defense : <Span>{pokemon.stats[2].base_stat}</Span></Type>
            </ContainerType>
            <ContainerType>
              <Type >Speed : <Span>{pokemon.stats[5].base_stat}</Span></Type>
              <Type >Special Attack : <Span>{pokemon.stats[3].base_stat}</Span></Type>
              <Type >Special Defense : <Span>{pokemon.stats[4].base_stat}</Span></Type>
            </ContainerType>
          </Container>
        </MainPokemon>
      ) : (
          <Loading />
        )}
    </>
  );
};

export default Pokemon;
