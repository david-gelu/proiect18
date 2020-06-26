import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import Pokemon from './Pokemon';
import Header from './navbar/Header';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/pokemon" component={Pokemon} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;