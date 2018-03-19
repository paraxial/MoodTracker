import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Header from './Header';
import About from './About';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        <Route path="/" component={About} />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
