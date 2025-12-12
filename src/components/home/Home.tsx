import { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, Moon, Sun, ChevronLeft, ChevronRight } from 'lucide-react';
import PokemonImg from './PokemonImg';

import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { useTheme } from '../context/ThemeContext';
import Loading from '../loading/Loading';

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  const [pokemon, setPokemonData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const navigate = useNavigate();

  const ITEMS_PER_PAGE = 100;

  // Fetch pokemon data for pagination
  useEffect(() => {
    if (searchQuery.trim() === '') {
      const fetchPokemon = async () => {
        setLoading(true);
        try {
          const offset = currentPage * ITEMS_PER_PAGE;
          const result = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/?limit=${ITEMS_PER_PAGE}&offset=${offset}`
          );
          setPokemonData(result.data.results);
          setTotalCount(result.data.count);

          setHasNextPage(result.data.next !== null);
          setHasPrevPage(result.data.previous !== null);

          // Reset visible items when page changes
          setVisibleItems(new Set());
        } catch (error) {
          console.error('Error fetching pokemon:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchPokemon();
    }
  }, [currentPage, searchQuery]);

  // Search in API
  useEffect(() => {
    if (searchQuery.trim() !== '') {
      const searchPokemon = async () => {
        setIsSearching(true);
        setLoading(true);
        try {
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${searchQuery.toLowerCase()}`
          );
          setSearchResults([{
            name: response.data.name,
            url: `https://pokeapi.co/api/v2/pokemon/${response.data.id}/`
          }]);
          setHasNextPage(false);
          setHasPrevPage(false);
          setCurrentPage(0);
        } catch (error) {
          try {
            const allResult = await axios.get(
              `https://pokeapi.co/api/v2/pokemon/?limit=10000&offset=0`
            );
            const filtered = allResult.data.results.filter((p: any) =>
              p.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(filtered);
            setHasNextPage(false);
            setHasPrevPage(false);
            setCurrentPage(0);
          } catch (err) {
            console.error('Error searching pokemon:', err);
            setSearchResults([]);
          }
        } finally {
          setIsSearching(false);
          setLoading(false);
        }
      };

      const debounceTimer = setTimeout(searchPokemon, 300);
      return () => clearTimeout(debounceTimer);
    }
  }, [searchQuery]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const pokemonName = entry.target.getAttribute('data-pokemon-name');
          if (pokemonName) {
            setVisibleItems((prev) => new Set(prev).add(pokemonName));
          }
        }
      });
    }, {
      rootMargin: '50px',
    });

    const items = document.querySelectorAll('[data-pokemon-item]');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [pokemon, searchResults]);

  const displayData = searchQuery.trim() !== '' ? searchResults : pokemon;

  const handlePokemonClick = (name: string) => {
    navigate(`/pokemon/${name}`);
  };

  const handleNextPage = () => {
    if (hasNextPage && !loading && searchQuery.trim() === '') {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0 && !loading && searchQuery.trim() === '') {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const pageNumber = currentPage + 1;
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
  const showPagination = searchQuery.trim() === '';

  return (
    <div className={`min-h-screen transition-colors duration-300 bg-background text-foreground`}>
      <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-950/95">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="/img/logo.webp" alt="logo" className="w-10 h-10" />
            <h2 className="text-2xl font-bold text-red-600">Pokédex</h2>
          </div>

          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search pokemon..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>
          </div>

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

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="flex justify-center items-center gap-2 text-5xl md:text-4xl font-bold text-pokemon-primary pb-12 text-center tracking-wide drop-shadow-lg font-mono">
          P
          <img src="/img/logo.webp" alt="logo" className="w-12 h-12 animate-bounce" />
          kem
          <img src="/img/logo.webp" alt="logo" className="w-12 h-12 animate-bounce" />
          ns
        </h1>

        <div className="text-center mb-8">
          {searchQuery && (
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Found {displayData.length} pokemon
            </p>
          )}
          {!searchQuery && (
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Total: {totalCount} pokemon
            </p>
          )}
        </div>

        {showPagination && (
          <div className="flex justify-center items-center gap-4 mb-8">
            <Button
              onClick={handlePrevPage}
              disabled={currentPage === 0 || loading}
              className="flex items-center gap-2 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            <span className="text-gray-600 dark:text-gray-400 font-medium min-w-fit">
              Page {pageNumber} of {totalPages}
            </span>

            <Button
              onClick={handleNextPage}
              disabled={!hasNextPage || loading}
              className="flex items-center gap-2 disabled:cursor-not-allowed transition-colors"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}

        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {displayData.length > 0 ? (
              displayData.map(({ name, url, id }: any) => (
                <div
                  key={name}
                  data-pokemon-item
                  data-pokemon-name={name}
                  className="flex-1"
                >
                  <figure className="m-auto relative rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                    <Button
                      onClick={() => handlePokemonClick(name)}
                      variant='outline'
                      className="w-full h-full m-auto mt-2 mb-2 font-bold cursor-pointere  p-2 rounded shadow-md hover:shadow-lg"
                    >
                      {visibleItems.has(name) ? (
                        <>
                          <PokemonImg url={url} key={id} />
                          <figcaption className="text-center pt-2">
                            <div className="text-sm dark:text-gray-200">
                              Name: <p className="font-bold capitalize text-red-600 dark:text-red-400">{name}</p>
                            </div>
                          </figcaption>
                        </>
                      ) : (
                        <Loading />
                      )}
                    </Button>
                  </figure>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-foreground text-lg">
                  {searchQuery ? `No pokemon found matching "${searchQuery}"` : 'No pokemon found'}
                </p>
              </div>
            )}
          </div>
        )}

        {showPagination && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <Button
              onClick={handlePrevPage}
              disabled={currentPage === 0 || loading}
              className="flex items-center gap-2 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            <span className="text-gray-600 dark:text-gray-400 font-medium min-w-fit">
              Page {pageNumber} of {totalPages}
            </span>

            <Button
              onClick={handleNextPage}
              disabled={!hasNextPage || loading}
              className="flex items-center gap-2 disabled:cursor-not-allowed transition-colors"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

