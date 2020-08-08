import React from 'react';

import PokeImg from '../home/PokemonImg';
import PokemonName from './details/Name';
import PokemonTypes from './details/Type';
import PokemonAbility from './details/Ability';
import PokemonFirstMove from './details/Move1';
import PokemonSecondMove from './details/Move2';
import PokemonThirdMove from './details/Move3';
import PokemonHp from './details/Hp';
import PokemonAttack from './details/Attack';
import PokemonSpecialAttack from './details/SpecialAttack';
import PokemonDefense from './details/Defense';
import PokemonSpecialDefense from './details/SpecialDefense';
import PokemonSpeed from './details/Speed';



import { MainPokemon, Img, Container, ContainerType } from './Pokemon.style';
// import { Main } from '../home/Home.style';

const Pokemon = ({ url }) => {

  return (
    <MainPokemon>
      <Container>
        <ContainerType>
          < PokemonName url={url} />
          < PokemonTypes url={url} />
          < PokemonAbility url={url} />
        </ContainerType>
        <ContainerType>
          < PokemonFirstMove url={url} />
          < PokemonSecondMove url={url} />
          < PokemonThirdMove url={url} />
        </ContainerType>
      </Container >
      <Img>
        <PokeImg url={url} />
      </Img>
      <Container>
        <ContainerType>
          < PokemonHp url={url} />
          < PokemonAttack url={url} />
          < PokemonDefense url={url} />
        </ContainerType>
        <ContainerType>
          < PokemonSpeed url={url} />
          < PokemonSpecialAttack url={url} />
          < PokemonSpecialDefense url={url} />
        </ContainerType>
      </Container>
    </MainPokemon>
  );
};

export default Pokemon;