import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [like, showLike] = useState(false);
  const [color, setColor] = useState('#000');

  const likePrint = () => {
    showLike(!like);
  }

  const [data, setPokemon] = useState('https://pokeapi.co/api/v2/pokemon/'); //daca adaug {id} dupa / crapa tot :(

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(data);
      console.log({ posts: result.data });
      setPokemon({ posts: [result.data] });
    };
    fetchData();
  }, []);
  return (
    <div className="main">
      {data.posts && data.posts.map(({ id, name }) => {
        return (
          <div key={id} >
            <div className="pokemon">
              <figure className="pokemon-container">
                <a href="/pokemon"> <img src="http://unsplash.it/600" alt=" pokemon" />
                  <figcaption>
                    <span className="pokemon-detail">Name: {name}</span>
                  </figcaption></a>
              </figure>
              <figure className="pokemon-container">
                <a href="/pokemon"> <img src="http://unsplash.it/600" alt=" pokemon" />
                  <figcaption>
                    <span className="pokemon-detail">Name: {name}</span>
                  </figcaption></a>
              </figure>
              <figure className="pokemon-container">
                <a href="/pokemon"> <img src="http://unsplash.it/600" alt=" pokemon" />
                  <figcaption>
                    <span className="pokemon-detail">Name: {name}</span>
                  </figcaption></a>
              </figure>
              <figure className="pokemon-container">
                <a href="/pokemon"> <img src="http://unsplash.it/600" alt=" pokemon" />
                  <figcaption>
                    <span className="pokemon-detail">Name: {name}</span>
                  </figcaption></a>
              </figure>
            </div>
            <div className="pokemon">
              <figure className="pokemon-container">
                <a href="/pokemon"> <img src="http://unsplash.it/600" alt=" pokemon" />
                  <figcaption>
                    <span className="pokemon-detail">Name: {name}</span>
                  </figcaption></a>
              </figure>
              <figure className="pokemon-container">
                <a href="/pokemon"> <img src="http://unsplash.it/600" alt=" pokemon" />
                  <figcaption>
                    <span className="pokemon-detail">Name: {name}</span>
                  </figcaption></a>
              </figure>
              <figure className="pokemon-container">
                <a href="/pokemon"> <img src="http://unsplash.it/600" alt=" pokemon" />
                  <figcaption>
                    <span className="pokemon-detail">Name: {name}</span>
                  </figcaption></a>
              </figure>
              <figure className="pokemon-container">
                <a href="/pokemon"> <img src="http://unsplash.it/600" alt=" pokemon" />
                  <figcaption>
                    <span className="pokemon-detail">Name: {name}</span>
                  </figcaption></a>
              </figure>
              <figure className="pokemon-container">
                <a href="/pokemon"> <img src="http://unsplash.it/600" alt=" pokemon" />
                  <figcaption>
                    <span className="pokemon-detail">Name: {name}</span>
                  </figcaption></a>
              </figure>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;