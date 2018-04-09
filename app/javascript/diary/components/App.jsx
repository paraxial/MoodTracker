import React from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './Header';
import About from './About';
import Signup from './Signup';

const signupPath = "/signup";
const loginPath = "/login";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="app">
          <Header>
            <Link to={loginPath}>Log in</Link>
            <Link to={signupPath}>Sign up</Link>
          </Header>
          <div className="center-plane">
            <Switch>
              <Route exact path="/" component={About} />
              <Route path={signupPath} component={Signup} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
