import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, ChevronLeft, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import PokemonImg from '../home/PokemonImg';
import Loading from '../loading/Loading';
import { useTheme } from '../context/ThemeContext';

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

const PokemonDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [description, setDescription] = useState<string>('');
  const [showAllMoves, setShowAllMoves] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      try {
        const result = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name?.toLowerCase()}`
        );
        setPokemon(result.data);

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
      } catch (error) {
        console.error('Error fetching pokemon:', error);
      } finally {
        setLoading(false);
      }
    };

    if (name) {
      fetchPokemon();
    }
  }, [name]);

  if (loading) return <Loading />;
  if (!pokemon) return <div className="text-center py-12">Pokemon not found</div>;

  const getTypeColor = (type: string) => {
    const typeColors: { [key: string]: string } = {
      fire: 'bg-type-fire',
      water: 'bg-type-water',
      grass: 'bg-type-grass',
      electric: 'bg-type-electric',
      ice: 'bg-cyan-400',
      fighting: 'bg-red-700',
      poison: 'bg-purple-500',
      ground: 'bg-amber-700',
      flying: 'bg-blue-400',
      psychic: 'bg-pink-500',
      bug: 'bg-lime-500',
      rock: 'bg-gray-500',
      ghost: 'bg-purple-700',
      dragon: 'bg-indigo-600',
      dark: 'bg-gray-800',
      steel: 'bg-slate-400',
      fairy: 'bg-pink-400',
    };
    return typeColors[type] || 'bg-primary';
  };

  const displayedMoves = showAllMoves ? pokemon.moves : pokemon.moves.slice(0, 15);

  const chartData = pokemon.stats.map((stat) => ({
    name: stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1),
    value: stat.base_stat,
  }));

  const getChartColor = (theme: string) => {
    const primaryColor = theme === 'dark' ? '#ef4444' : '#dc2626';
    return primaryColor;
  };

  const getGridColor = (theme: string) => {
    return theme === 'dark' ? '#444' : '#e5e7eb';
  };

  const getTextColor = (theme: string) => {
    return theme === 'dark' ? '#888' : '#666';
  };

  const getTooltipBg = (theme: string) => {
    return theme === 'dark' ? '#1f2937' : '#ffffff';
  };

  const getTooltipBorder = (theme: string) => {
    return theme === 'dark' ? '#444' : '#e5e7eb';
  };

  return (
    <div className={`min-h-screen p-4 transition-colors duration-300 bg-background text-foreground`}>
      {/* Header with Back Button */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-950/95">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center gap-4">

          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Pokédex
          </Button>
          <Button
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 " />
            ) : (
              <Sun className="w-5 h-5 " />
            )}
          </Button>
        </div>
      </header>

      <div className="max-w-5xl mx-auto space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-pokemon-primary capitalize mb-2">
            {pokemon.name}
          </h1>
          <p className="text-muted-foreground">
            #{pokemon.id.toString().padStart(3, '0')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-6">
            <Card className="overflow-hidden">
              <CardContent className="p-6 bg-pokemon-light flex justify-center items-center h-64">
                <PokemonImg url={`https://pokeapi.co/api/v2/pokemon/${pokemon.id}/`} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Type</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {pokemon.types.map((t, idx) => (
                  <div
                    key={idx}
                    className={`${getTypeColor(t.type.name)} rounded-lg p-3 text-center font-semibold capitalize`}
                  >
                    {t.type.name}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Physical Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Height</p>
                  <p className="text-2xl font-bold text-primary">
                    {(pokemon.height / 10).toFixed(1)} m
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Weight</p>
                  <p className="text-2xl font-bold text-primary">
                    {(pokemon.weight / 10).toFixed(1)} kg
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Base Experience</p>
                  <p className="text-2xl font-bold text-pokemon-secondary">
                    {pokemon.base_experience}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Details */}
          <div className="md:col-span-2 space-y-6">
            {/* Description Card */}
            {description && (
              <Card>
                <CardHeader>
                  <CardTitle>Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">
                    {description.replace(/[\n\f]/g, ' ')}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Abilities Card */}
            <Card>
              <CardHeader>
                <CardTitle>Abilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {pokemon.abilities.map((ability, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
                  >
                    <span className="capitalize font-medium text-green-700 dark:text-green-400">
                      {ability.ability.name}
                    </span>
                    {ability.is_hidden && (
                      <span className="text-xs bg-yellow-500 text-white px-3 py-1 rounded-full">
                        Hidden
                      </span>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Stats Chart Card */}
            <Card>
              <CardHeader>
                <CardTitle>Base Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={chartData}
                    margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke={getGridColor(theme)}
                    />
                    <XAxis
                      dataKey="name"
                      angle={-45}
                      textAnchor="end"
                      height={100}
                      tick={{ fontSize: 12, fill: getTextColor(theme) }}
                    />
                    <YAxis
                      tick={{ fontSize: 12, fill: getTextColor(theme) }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: getTooltipBg(theme),
                        border: `1px solid ${getTooltipBorder(theme)}`,
                        borderRadius: '8px',
                        color: theme === 'dark' ? '#fff' : '#000',
                      }}
                    />
                    <Bar
                      dataKey="value"
                      fill={getChartColor(theme)}
                      className="chart-primary-bar"
                      radius={[8, 8, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>

                {/* Stats List */}
                <div className="mt-6 space-y-3">
                  {pokemon.stats.map((stat, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between">
                        <span className="capitalize text-sm font-medium text-foreground">
                          {stat.stat.name}
                        </span>
                        <span className="font-bold text-foreground">
                          {stat.base_stat}
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{
                            background: 'hsl(0 100% 50%)',
                            width: `${(stat.base_stat / 150) * 100}%`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Moves Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Moves ({pokemon.moves.length})</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-h-72 overflow-y-auto">
              {displayedMoves.map((move, idx) => (
                <div
                  key={idx}
                  className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 text-center hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                >
                  <p className="capitalize text-sm font-medium text-blue-700 dark:text-blue-400 truncate">
                    {move.move.name}
                  </p>
                </div>
              ))}
            </div>

            {pokemon.moves.length > 15 && (
              <Button
                onClick={() => setShowAllMoves(!showAllMoves)}
                variant="outline"
                className="w-full flex items-center justify-center gap-2"
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PokemonDetail;