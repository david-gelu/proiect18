import React, { useState, useEffect } from 'react';
import axios from 'axios';


import PokeImg from './PokemonImg';
import Pokemon from '../pokemon/Pokemon';
import { Main, Title, PokemonDiv, PokemonWrap, Alink, Figure, Paragraph, Span } from './Home.style';
// import { Img, Container, ContainerType, Type, ContainerSpecial, Special } from '../pokemon/Pokemon.style';



const Home = () => {

  const [pokemon, setPokemonData] = useState([]);

  useEffect(() => {
    const makePokemon = async () => {
      const result = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=32');
      setPokemonData(result.data.results)
    };
    makePokemon();
  }, []);

  // const targetPoke = document.querySelectorAll('Pokemon');

  // const displaying = () => {
  //   targetPoke!== style = { { display: "flex" }} ? style = {{ display: "none" }
  // } : style = {{ display: "flex" }
  //           }
  // }


  return (
    <Main>

      <Title>pokemons</Title>
      <PokemonDiv>
        {pokemon.map(({ name, url, id }) => (
          <PokemonWrap>
            <Figure >
              <Alink href="/Pokemon">
                <PokeImg url={url} key={id} />
                <figcaption>
                  <Paragraph>
                    Name:
                    <Span>{name}</Span>
                  </Paragraph>
                </figcaption>
              </Alink>
            </Figure>
            <Pokemon url={url} />
          </PokemonWrap>
        ))}
      </PokemonDiv>
    </Main>
  );
}

export default Home;

