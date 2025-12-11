import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import PokemonDetail from '@/components/pokemon/PokemonDetail';
import { ThemeProvider } from './components/context/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;