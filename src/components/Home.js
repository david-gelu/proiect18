import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {

  const [pokemon, setPokemonData] = useState([]);


  const pokeId = () => {
    const min = Math.ceil(1);
    const max = Math.floor(151);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const makePokemon = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/')
      .then(response => {
        console.log(response.data);
        setPokemonData([response.data]);
      });
  };
  useEffect(() => {
    makePokemon();
  }, [setPokemonData]);




  //   return (
  //     < div className="main" >
  //       {pokemon.map(({ name }) => {
  //         return (
  //           <div className="pokemon">
  //             <figure className="pokemon-container">
  //               <a href="/pokemon"><img src={`http://pokeapi.co/media/sprites/pokemon/`} alt=" pokemon" />
  //                 <figcaption>
  //                   <span className="pokemon-detail">Name: {name}</span>
  //                 </figcaption></a>
  //             </figure>
  //           </div>
  //         );
  //       })}
  //     </div >
  //   );
  // }






  return (
    <div className="main">
      <h1>pokemoane</h1>
      <div className="pokemon">
        <figure className="pokemon-container">
          <Link to="/pokemon"> <img src={`http://pokeapi.co/media/sprites/pokemon/${pokeId}.png`} alt=" pokemon" />
            <figcaption>
              <span className="pokemon-detail">Name: {pokemon.name}</span>
            </figcaption></Link>
        </figure>
        <figure className="pokemon-container">
          <Link to="/pokemon"> <img src={`http://unsplash.it/200`} alt=" pokemon" />
            <figcaption>
              <span className="pokemon-detail">Name: {pokemon.name}</span>
            </figcaption></Link>
        </figure>
        <figure className="pokemon-container">
          <Link to="/pokemon"> <img src={`http://unsplash.it/200`} alt=" pokemon" />
            <figcaption>
              <span className="pokemon-detail">Name: {pokemon.name}</span>
            </figcaption></Link>
        </figure>
        <figure className="pokemon-container">
          <Link to="/pokemon"> <img src={`http://unsplash.it/200`} alt=" pokemon" />
            <figcaption>
              <span className="pokemon-detail">Name: {pokemon.name}</span>
            </figcaption></Link>
        </figure>
      </div>
      <div className="pokemon">
        <figure className="pokemon-container">
          <Link to="/pokemon"> <img src={`http://unsplash.it/200`} alt=" pokemon" />
            <figcaption>
              <span className="pokemon-detail">Name: {pokemon.name}</span>
            </figcaption></Link>
        </figure>
        <figure className="pokemon-container">
          <Link to="/pokemon"> <img src={`http://unsplash.it/200`} alt=" pokemon" />
            <figcaption>
              <span className="pokemon-detail">Name: {pokemon.name}</span>
            </figcaption></Link>
        </figure>
        <figure className="pokemon-container">
          <Link to="/pokemon"> <img src={`http://unsplash.it/200`} alt=" pokemon" />
            <figcaption>
              <span className="pokemon-detail">Name: {pokemon.name}</span>
            </figcaption></Link>
        </figure>
        <figure className="pokemon-container">
          <Link to="/pokemon"> <img src={`http://unsplash.it/200`} alt=" pokemon" />
            <figcaption>
              <span className="pokemon-detail">Name: {pokemon.name}</span>
            </figcaption></Link>
        </figure>
      </div>

    </div>
  );
}
// useEffect(() => {
//   const fetchData = async () => {
//     const result = await axios.get('https://pokeapi.co/api/v2/pokemon/)';
//     console.log({ posts: result.data });
//     setPokemonData([result.data);
//   };
//   fetchData();
// }, []);




export default Home;