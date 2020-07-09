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

  const [image, setImage] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {

      const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
      // https://pokeapi.co/api/v2/pokemon/ ar trebui sa aiba o cifra de la 1 la 20 de exemplu https://pokeapi.co/api/v2/pokemon/1/ https://pokeapi.co/api/v2/pokemon/2/. Am inccercat cu un for() dar adauga https://pokeapi.co/api/v2/pokemon/1, https://pokeapi.co/api/v2/pokemon/1,2 ...https://pokeapi.co/api/v2/pokemon/1,2,3,4,5,..19,20
      // este REST api si nu am mai lucrat,doar cu json.
      // ce incerc sa fac este sa pun imagine pe acesta pagina si apoi pe pokemon.js sa pun detalii gen atack,hp etc.
      // functia de mai jos comentata toata functioneaza doar ca este random si poza nu se potriveste cu numele.
      // Multumesc
      setImage(result.data.sprites);
      console.log(setImage(result.data.sprites));
    };
    fetchPokemon();
  }, []);

  return (
    <>
      {
        image.map(({ sprites }) => {
          return (
            <Image className="image-pkm" src={sprites.front_default} alt="pokemon" />
          )
        })
      };
    </>
  );
}

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