import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import styled, { css } from 'styled-components';

const Home = () => {

  const [poke, setPokemon] = useState({ posts: [] });
  const [pokemon, setPokemonData] = useState({});

  useEffect(() => {
    makePokemon();
  }, []);

  const pokeId = () => {
    const min = Math.ceil(1);
    const max = Math.floor(151);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const makePokemon = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/' + pokeId())
      .then(response => {
        console.log({ posts: response.data });
        setPokemon([response.data]);
      });
  };

  return (
    <div className="main">
      <div className="pokemon">
        <figure className="pokemon-container">
          <Link to="/pokemon"> <img src={`http://pokeapi.co/media/sprites/pokemon/${pokeId}.png`} alt=" pokemon" />
            <figcaption>
              <span className="pokemon-detail">Name: {pokemon.name}</span>
            </figcaption></Link>
        </figure>
        <figure className="pokemon-container">
          <Link to="/pokemon"> <img src={`http://pokeapi.co/media/sprites/pokemon/${pokeId}.png`} alt=" pokemon" />
            <figcaption>
              <span className="pokemon-detail">Name: {pokemon.name}</span>
            </figcaption></Link>
        </figure>
        <figure className="pokemon-container">
          <Link to="/pokemon"> <img src={`http://pokeapi.co/media/sprites/pokemon/${pokeId}.png`} alt=" pokemon" />
            <figcaption>
              <span className="pokemon-detail">Name: {pokemon.name}</span>
            </figcaption></Link>
        </figure>
        <figure className="pokemon-container">
          <Link to="/pokemon"> <img src={`http://pokeapi.co/media/sprites/pokemon/${pokeId}.png`} alt=" pokemon" />
            <figcaption>
              <span className="pokemon-detail">Name: {pokemon.name}</span>
            </figcaption></Link>
        </figure>
      </div>
      <div className="pokemon">
        <figure className="pokemon-container">
          <Link to="/pokemon"> <img src={`http://pokeapi.co/media/sprites/pokemon/${pokeId}.png`} alt=" pokemon" />
            <figcaption>
              <span className="pokemon-detail">Name: {pokemon.name}</span>
            </figcaption></Link>
        </figure>
        <figure className="pokemon-container">
          <Link to="/pokemon"> <img src={`http://pokeapi.co/media/sprites/pokemon/${pokeId}.png`} alt=" pokemon" />
            <figcaption>
              <span className="pokemon-detail">Name: {pokemon.name}</span>
            </figcaption></Link>
        </figure>
        <figure className="pokemon-container">
          <Link to="/pokemon"> <img src={`http://pokeapi.co/media/sprites/pokemon/${pokeId}.png`} alt=" pokemon" />
            <figcaption>
              <span className="pokemon-detail">Name: {pokemon.name}</span>
            </figcaption></Link>
        </figure>
        <figure className="pokemon-container">
          <Link to="/pokemon"> <img src={`http://pokeapi.co/media/sprites/pokemon/${pokeId}.png`} alt=" pokemon" />
            <figcaption>
              <span className="pokemon-detail">Name: {pokemon.name}</span>
            </figcaption></Link>
        </figure>
      </div>

    </div>
  );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get(https://pokeapi.co/api/v2/pokemon/);
  //       console.log({ posts: result.data });
  //     setPokemonData( [result.data);
  //   };
  //   fetchData();
  // }, []);

  // return (
  //   < div className="main" >
  //     {poke.posts.map(({ id, name }) => {
  //       return (
  //         <div className="pokemon">
  //           <figure className="pokemon-container" ke>
  //             <a href="/pokemon"><img src={`http://pokeapi.co/media/sprites/pokemon/${pokeId()}.png`} alt=" pokemon" />
  //               <figcaption>
  //                 <span className="pokemon-detail">Name: {name}</span>
  //               </figcaption></a>
  //           </figure>
  //         </div>
  //       );
  //     })}
  //   </div >
  // );
}

export default Home;