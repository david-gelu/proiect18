import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PokeImg from './PokemonImg';
import useModal from '../modal/useModal';
import Modal from '../modal/Modal';
import { Main, Title, PokemonDiv, PokemonWrap, Alink, Figure, Paragraph, Span } from './Home.style';

const Home = () => {

  const [pokemon, setPokemonData] = useState([]);

  useEffect(() => {
    const makePokemon = async () => {
      const result = await axios.get('https://pokeapi.co/api/v2/pokemon/');
      setPokemonData(result.data.results)
    };
    makePokemon();
  }, []);

  const { isShowing, toggle, onePokemon } = useModal(pokemon)
  return (
    <Main>
      <Title>pokemons</Title>
      <PokemonDiv>
        {pokemon.map(({ name, url, id }) => (
          <PokemonWrap key={name}>
            <Figure >
              <Alink onClick={toggle}>
                <PokeImg url={url} key={id} />
                <figcaption>
                  <Paragraph>
                    Name:
                    <Span>{name}</Span>
                  </Paragraph>
                </figcaption>
              </Alink>
            </Figure>
            <Modal isShowing={isShowing} hide={toggle} onePokemon={onePokemon} url={url} name={name} />
          </PokemonWrap>
        ))}
      </PokemonDiv>
    </Main >
  );
}

export default Home;

