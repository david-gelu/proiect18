import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import Pokemon from './Pokemon';
import Header from './navbar/Header';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <>
          <Route path="/" exact component={Home} />
          <Route path="/pokemon" component={Pokemon} />
        </>
      </BrowserRouter>
    </>
  );
};

export default App;