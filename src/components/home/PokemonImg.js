// import React, { useState } from "react";
// import axios from "axios";
// const PokeImg = () => {
//   const [images, setImages] = useState([]);
//   const fetchPokemon = async () => {
//     const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
//     setImages(response.data.results);
//   };
//   console.log("RENDERED", images);
//   images.length < 1 && fetchPokemon();
//   return images.map((imageUrl, index) => (
//     <img key={index} className="image-pkm" src={imageUrl.url} alt="pokemon" />
//   ));
// };
// export default PokeImg;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
const Image = styled.img`
width: 15vw;
flex: 1 1 100% ;
&@media(max-width: 900px){
  width: 40vw;
  flex: 1 1 100%;
}
@media(max-width: 767px){
  width: 40vw;
    // margin: 0 auto;
    flex: 1 1 100% ;
    padding: 0;
    margin-left:50%;
    transform:translate(-50%);
}
`
const PokeImg = () => {

  // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  // const numbers = [1];
  // const pokemonIndex = numbers.map((number) => number);
  // console.log(pokemonIndex.toString());
  // let linkArray = [];
  // for (let i = 1; i < 21; i++) {
  //   linkArray.unshift(i)
  //   console.log(linkArray.unshift())
  // }
  // const pokemonIndex = linkArray.map((number) => number);
  const TOTAL_POKEMON = 20;

  const usePokemonImage = () => {
    const [image, setImage] = useState(null);

    useEffect(() => {
      const fetchPokemon = async () => {
        const randomPokemonIndex = Math.ceil(Math.random(TOTAL_POKEMON) * TOTAL_POKEMON);
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemonIndex}`);
        // const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/ `linkArray);
        // const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/` + pokemonIndex);
        // const response = await axios.get(`{pokemonIndex}`);
        const pokemonImage = response.data.sprites.front_default;
        setImage(pokemonImage);

      };
      fetchPokemon();
    }, []);

    return image;
  };

  const imageUrl = usePokemonImage();

  return (
    <Image className="image-pkm" src={imageUrl} alt="pokemon" />

  );
}

export default PokeImg;
