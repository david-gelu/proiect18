// import { BrowserRouter, Route } from 'react-router-dom';

// import Pokemon from './pokemon/Pokemon';
// import Header from './navbar/Header';
import Home from './components/home/Home';

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