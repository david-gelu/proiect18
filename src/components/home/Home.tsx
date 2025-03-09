import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PokeImg from './PokemonImg';
import useModal from '../modal/useModal';
import Modal from '../modal/Modal';
import { Main, Title, ImgLogo, PokemonDiv, PokemonWrap, Alink, Figure, Paragraph, Span } from './Home.style';

const Home = () => {

  const [pokemon, setPokemonData] = useState([]);
  const [modalName, setModalName] = useState("");
  const [modalUrl, setModalUrl] = useState("");
  const { isShowing, toggle } = useModal(pokemon);

  useEffect(() => {
    const makePokemon = async () => {
      const result = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151');
      setPokemonData(result.data.results)
    };
    makePokemon();
  }, []);

  return (
    <Main>

      <Title> P<ImgLogo src="../img/logo.webp" alt="logo" />kem<ImgLogo src="../img/logo.webp" alt="logo" />ns </Title>
      <PokemonDiv>
        {pokemon.map(({ name, url, id }) => (
          <PokemonWrap key={name}>
            <Figure>
              <Alink onClick={() => {
                setModalName(name);
                setModalUrl(url);
                toggle()
              }}>
                <PokeImg url={url} key={id} />
                <figcaption>
                  <Paragraph>
                    Name:
                    <Span>{name}</Span>
                  </Paragraph>
                </figcaption>
              </Alink>
            </Figure>

          </PokemonWrap>
        ))}
      </PokemonDiv>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        url={modalUrl}
        name={modalName}
        setCurrentPokemon={(pokemon) => setPokemonData(pokemon)}
      />
    </Main>
  );
}

export default Home;

