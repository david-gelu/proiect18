import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const PokeImg = () => {


  const TOTAL_POKEMON = 21;

  const useRandomPokemonImage = () => {
    const [image, setImage] = useState(null);

    useEffect(() => {
      const fetchPokemon = async () => {
        const randomPokemonIndex = Math.ceil(Math.random() * TOTAL_POKEMON);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonIndex}`);
        const data = await response.json();
        const pokemonImage = data.sprites.front_default;
        setImage(pokemonImage);
      };
      fetchPokemon();
    }, []);

    return image;
  };

  const imageUrl = useRandomPokemonImage();

  return (
    <div >
      <img src={imageUrl} alt="" />
    </div>
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
