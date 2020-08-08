import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const Image = styled.img`
// flex: 1 0 0.2% ;
margin: 0 auto;
width: 40%;
`
const PokeImg = ({ url }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImagePokemon = async () => {
      const result = await axios.get(url);
      setImage(result.data.sprites.front_default);
    };
    fetchImagePokemon();
  }, [url]);
  return (
    <>
      {image !== null ? (
        <Image src={image} alt="pokemon" />
      ) : (
          "loading..."
        )}
    </>
  );
};

export default PokeImg;
