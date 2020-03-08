import React from 'react';
import logo from './logo.svg';
import LoginPage from "./LoginPage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <React.Fragment>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/">
              <div className="App">
                <p>Home Page</p>
              </div>
            </Route>

          </Switch>
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
