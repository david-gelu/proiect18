import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {

  const [poke, setPokemon] = useState([]);
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
        setPokemonData(response.data)
      })
  }

  return (
    <div className="main">
      <div className="pokemon">
        <figure className="pokemon-container">
          <a href="/pokemon"> <img src={`http://pokeapi.co/media/sprites/pokemon/${pokeId()}.png`} alt=" pokemon" />
            <figcaption>
              <span className="pokemon-detail">Name: {pokemon.name}</span>
            </figcaption></a>
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
  //   <div className="main">
  //     {data.posts && data.posts.map(({ id, name }) => {
  //       return (
  //         <div key={id} >
  //           <div className="pokemon">
  //             <figure className="pokemon-container">
  //               <a href="/pokemon"> <img src="http://unsplash.it/600" alt=" pokemon" />
  //                 <figcaption>
  //                   <span className="pokemon-detail">Name: {name}</span>
  //                 </figcaption></a>
  //             </figure>
  //             <figure className="pokemon-container">
  //               <a href="/pokemon"> <img src="http://unsplash.it/600" alt=" pokemon" />
  //                 <figcaption>
  //                   <span className="pokemon-detail">Name: {name}</span>
  //                 </figcaption></a>
  //             </figure>
  //             <figure className="pokemon-container">
  //               <a href="/pokemon"> <img src="http://unsplash.it/600" alt=" pokemon" />
  //                 <figcaption>
  //                   <span className="pokemon-detail">Name: {name}</span>
  //                 </figcaption></a>
  //             </figure>
  //             <figure className="pokemon-container">
  //               <a href="/pokemon"> <img src="http://unsplash.it/600" alt=" pokemon" />
  //                 <figcaption>
  //                   <span className="pokemon-detail">Name: {name}</span>
  //                 </figcaption></a>
  //             </figure>
  //           </div>
  //           <div className="pokemon">
  //             <figure className="pokemon-container">
  //               <a href="/pokemon"> <img src="http://unsplash.it/600" alt=" pokemon" />
  //                 <figcaption>
  //                   <span className="pokemon-detail">Name: {name}</span>
  //                 </figcaption></a>
  //             </figure>
  //             <figure className="pokemon-container">
  //               <a href="/pokemon"> <img src="http://unsplash.it/600" alt=" pokemon" />
  //                 <figcaption>
  //                   <span className="pokemon-detail">Name: {name}</span>
  //                 </figcaption></a>
  //             </figure>
  //             <figure className="pokemon-container">
  //               <a href="/pokemon"> <img src="http://unsplash.it/600" alt=" pokemon" />
  //                 <figcaption>
  //                   <span className="pokemon-detail">Name: {name}</span>
  //                 </figcaption></a>
  //             </figure>
  //             <figure className="pokemon-container">
  //               <a href="/pokemon"> <img src="http://unsplash.it/600" alt=" pokemon" />
  //                 <figcaption>
  //                   <span className="pokemon-detail">Name: {name}</span>
  //                 </figcaption></a>
  //             </figure>
  //             <figure className="pokemon-container">
  //               <a href="/pokemon"> <img src="http://unsplash.it/600" alt=" pokemon" />
  //                 <figcaption>
  //                   <span className="pokemon-detail">Name: {name}</span>
  //                 </figcaption></a>
  //             </figure>
  //           </div>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
}

export default Home;