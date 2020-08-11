import React, { useState, useEffect } from 'react';
import axios from 'axios';


import PokeImg from './PokemonImg';
import useModal from './useModal';
import Modal from './Modal';
// import Pokemon from '../pokemon/Pokemon';
import { Main, Title, PokemonDiv, PokemonWrap, Alink, Figure, Paragraph, Span } from './Home.style';
// import { Img, Container, ContainerType, Type, ContainerSpecial, Special } from '../pokemon/Pokemon.style';



const Home = () => {

  const [pokemon, setPokemonData] = useState([]);

  useEffect(() => {
    const makePokemon = async () => {
      const result = await axios.get('https://pokeapi.co/api/v2/pokemon/');
      setPokemonData(result.data.results)
    };
    makePokemon();
  }, []);


  const { isShowing, toggle } = useModal();

  return (
    <Main>

      <Title>pokemons</Title>
      <PokemonDiv>
        {pokemon.map(({ name, url, id }) => (
          <PokemonWrap>
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
            <Modal isShowing={isShowing} hide={toggle} />
          </PokemonWrap>
        ))}
      </PokemonDiv>
    </Main>
  );
}

export default Home;

