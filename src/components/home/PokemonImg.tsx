import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Loading from '../loading/Loading';

const Image = styled.img`
  margin: 0 auto;
  width: 40%;
`;
const PokeImg = ({ url }) => {
  const [image, setImage] = useState(null);
  useEffect(() => {
    try {
      const fetchImagePokemon = async () => {
        const result = await axios.get(url);
        setImage(result.data.sprites.front_default);
      };
      fetchImagePokemon();
    } catch (err) {
      console.log(err);
    }
  }, [url]);
  return (
    <>
      {image !== null ? <Image src={image} alt="pokemon" /> : <Loading />}
    </>
  );
};

export default PokeImg;
