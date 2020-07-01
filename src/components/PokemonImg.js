import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokeImg = () => {

  // const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6, 17, 18, 19, 20];
  // const pokemonIndex = numbers.map((number) => number);
  // console.log(pokemonIndex);


  const TOTAL_POKEMON = 50;

  const useRandomPokemonImage = () => {
    const [image, setImage] = useState(null);

    useEffect(() => {
      const fetchPokemon = async () => {
        const randomPokemonIndex = Math.ceil(Math.random(TOTAL_POKEMON) * TOTAL_POKEMON);
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemonIndex}`);
        const pokemonImage = response.data.sprites.front_default;
        setImage(pokemonImage);
      };
      fetchPokemon();
    }, []);

    return image;
  };

  const imageUrl = useRandomPokemonImage();

  return (
    <>
      <img className="image-pkm" src={imageUrl} alt="pokemon" />
    </>
  );



  // const [pokemonImg, setPokemonImg] = useState([]);


  // useEffect(() => {

  //   const imgPokemon = () => {
  //     axios
  //       .get(`https://pokeapi.co/api/v2/pokemon-form/`)
  //       .then(result => {
  //         console.log(result.data.results[5].url);
  //         setPokemonImg([result.data.results[1].url]);
  //       });
  //   };
  //   imgPokemon();
  // }, []);

  // return (
  //   <div>
  //     {image.map(({ front_default }) => {
  //       return (
  //         <div>
  //           <img src="http://unsplash.it/200" alt="Pokemon" />
  //           <p>doar sa fie ceva ^</p>
  //           <img src={front_default} alt="Pokemon" />
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
};

export default PokeImg;
