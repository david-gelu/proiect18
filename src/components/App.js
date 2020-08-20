import React from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';

import Home from './home/Home';
// import Pokemon from './pokemon/Pokemon';
// import Header from './navbar/Header';

const App = () => {
  return (
    <>
      <Home />
      {/* <BrowserRouter>
        <Header />
        <>
          <Route path="/" exact component={Home} />
          <Route path="/pokemon" component={Pokemon} />
        </>
      </BrowserRouter> */}
    </>
  );
};

export default App;