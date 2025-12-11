import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ChevronDown, ChevronUp } from 'lucide-react';
import PokemonImg from '../home/PokemonImg';
import Loading from '../loading/Loading';
import { Button } from '../ui/button';

interface PokemonData {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  forms: { name: string }[];
  types: { type: { name: string } }[];
  abilities: { ability: { name: string }; is_hidden: boolean }[];
  moves: { move: { name: string } }[];
  stats: { stat: { name: string }; base_stat: number }[];
  species: { url: string };
}

interface PokemonProps {
  url: string;
}

const Pokemon: React.FC<PokemonProps> = ({ url }) => {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [description, setDescription] = useState<string>('');
  const [showAllMoves, setShowAllMoves] = useState(false);

  useEffect(() => {
    const fetchDetailPokemon = async () => {
      try {
        const result = await axios.get(url);
        setPokemon(result.data);

        // Fetch species data for description
        if (result.data.species?.url) {
          try {
            const speciesResult = await axios.get(result.data.species.url);
            const flavorText = speciesResult.data.flavor_text_entries?.find(
              (entry: any) => entry.language.name === 'en'
            )?.flavor_text;
            setDescription(flavorText || 'No description available');
          } catch (err) {
            console.log(err);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchDetailPokemon();
  }, [url]);

  if (!pokemon) return <Loading />;

  const getStatColor = (value: number) => {
    if (value >= 100) return 'bg-green-500';
    if (value >= 75) return 'bg-yellow-500';
    if (value >= 50) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const displayedMoves = showAllMoves ? pokemon.moves : pokemon.moves.slice(0, 15);

  return (
    <div className="w-full space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-red-600 capitalize mb-2">
          {pokemon.name}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          #{pokemon.id.toString().padStart(3, '0')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex justify-center items-center bg-yellow-50 dark:bg-gray-700 rounded-lg p-8">
          <PokemonImg url={url} />
        </div>

        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-4">
            <p className="text-sm font-semibold mb-2">Type</p>
            <div className="flex flex-wrap gap-2">
              {pokemon.types.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium capitalize"
                >
                  {t.type.name}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-purple-500 text-white rounded-lg p-4">
              <p className="text-sm font-semibold">Height</p>
              <p className="text-2xl font-bold">
                {(pokemon.height / 10).toFixed(1)} m
              </p>
            </div>
            <div className="bg-purple-500 text-white rounded-lg p-4">
              <p className="text-sm font-semibold">Weight</p>
              <p className="text-2xl font-bold">
                {(pokemon.weight / 10).toFixed(1)} kg
              </p>
            </div>
          </div>

          <div className="bg-yellow-500 text-white rounded-lg p-4">
            <p className="text-sm font-semibold">Base Experience</p>
            <p className="text-2xl font-bold">{pokemon.base_experience}</p>
          </div>
        </div>
      </div>

      {description && (
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            Description
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            {description.replace(/[\n\f]/g, ' ')}
          </p>
        </div>
      )}

      <div className="bg-green-50 dark:bg-gray-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-3">
          Abilities
        </h3>
        <div className="space-y-2">
          {pokemon.abilities.map((ability, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <span className="capitalize text-gray-700 dark:text-gray-300">
                {ability.ability.name}
              </span>
              {ability.is_hidden && (
                <span className="text-xs bg-yellow-500 text-white px-2 py-1 rounded">
                  Hidden
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Base Stats
        </h3>
        {pokemon.stats.map((stat, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="capitalize text-gray-700 dark:text-gray-300 text-sm font-medium">
                {stat.stat.name}
              </span>
              <span className="text-gray-900 dark:text-white font-bold">
                {stat.base_stat}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${getStatColor(stat.base_stat)}`}
                style={{ width: `${(stat.base_stat / 150) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400">
            Moves ({pokemon.moves.length})
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-64 overflow-y-auto">
          {displayedMoves.map((move, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-700 rounded p-2 text-center text-sm hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors"
            >
              <p className="capitalize text-gray-700 dark:text-gray-300 truncate">
                {move.move.name}
              </p>
            </div>
          ))}
        </div>

        {pokemon.moves.length > 15 && (
          <Button
            onClick={() => setShowAllMoves(!showAllMoves)}
            className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 font-medium"
          >
            {showAllMoves ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Show More ({pokemon.moves.length - 15} more)
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Pokemon;
