import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './Header';
import About from './About';
import Signup from './Signup';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="app">
          <Header />
          <div className="center-plane">
            <Switch>
              <Route exact path="/" component={About} />
              <Route path="/signup" component={Signup} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
