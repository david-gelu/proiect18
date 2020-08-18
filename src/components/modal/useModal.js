import { useState, useEffect } from 'react';

const useModal = (pokemon) => {
  const [isShowing, setIsShowing] = useState(false);
  const [onePokemon, setOnePokemon] = useState([]);

  useEffect(() => {
    pokemon.forEach(poke => {
      setOnePokemon(poke);
    });
  }, [isShowing, pokemon]);
  console.log(pokemon)
  function toggle() {
    setIsShowing(!isShowing);
  }
  return {
    onePokemon,
    isShowing,
    toggle
  };
};

export default useModal;
