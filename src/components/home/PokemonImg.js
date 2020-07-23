import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const Image = styled.img`
width: 15vw;
flex: 1 1 100% ;
@media(max-width: 900px){
  width: 40vw;
  flex: 1 1 100%;
}
@media(max-width: 767px){
  width: 40vw;
    margin: 0 auto;
    flex: 1 1 100% ;
    padding: 0;
    margin-left:50%;
    transform:translate(50%);
}
`
const PokeImg = ({ url }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const result = await axios.get(url);
      setImage(result.data.sprites.front_default);
    };
    fetchPokemon();
  }, [url]);
  return (
    <>
      {image !== null ? (
        <Image className="image-pkm" src={image} alt="pokemon" />
      ) : (
          "loading..."
        )}
    </>
  );
};

export default PokeImg;


// Random img which is working
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// const Image = styled.img`
// width: 15vw;
// flex: 1 1 100% ;
// &@media(max-width: 900px){
//   width: 40vw;
//   flex: 1 1 100%;
// }
// @media(max-width: 767px){
//   width: 40vw;
//     flex: 1 1 100% ;
//     padding: 0;
//     margin-left:50%;
//     transform:translate(-50%);
// }
// `
// const PokeImg = () => {

//   const TOTAL_POKEMON = 20;

//   const usePokemonImage = () => {
//     const [image, setImage] = useState([]);

//     useEffect(() => {
//       const fetchPokemon = async () => {
//         const randomPokemonIndex = Math.ceil(Math.random(TOTAL_POKEMON) * TOTAL_POKEMON);
//         const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemonIndex}`);
//         const pokemonImage = response.data.sprites.front_default;
//         setImage(pokemonImage);

//       };
//       fetchPokemon();
//     }, []);

//     return image;
//   };

//   const imageUrl = usePokemonImage();

//   return (
//     <Image className="image-pkm" src={imageUrl} alt="pokemon" />

//   );
// }

// export default PokeImg;