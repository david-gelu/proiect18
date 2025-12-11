import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../loading/Loading';

interface PokemonImgProps {
  url: string;
}

const PokemonImg: React.FC<PokemonImgProps> = ({ url }) => {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchImagePokemon = async () => {
      try {
        const result = await axios.get(url);
        setImage(result.data.sprites.front_default);
      } catch (err) {
        console.log(err);
      }
    };
    fetchImagePokemon();
  }, [url]);

  return (
    <div className="w-40 h-40 mx-auto">
      {image ? (
        <img src={image} alt="pokemon" className="w-full h-full object-contain" />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default PokemonImg;
