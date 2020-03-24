import React from 'react';
import logo from './logo.svg';
import LoginPage from "./LoginPage"
import SignUp from "./Signup"
import ForgetPW from "./forgetPW"
import Chatroom from "./chatroom"
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
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/forgetpw">Forget Password</Link>
              </li>
              <li>
                <Link to="/chatroom">Chatroom</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/forgetpw">
              <ForgetPW />
            </Route>
            <Route path="/chatroom">
              <Chatroom />
            </Route>

            <Route path="/">
              <div className="App">
                <p>Alvin's Update:
                  I have included the following items: 
                  <ul>
                    <li>Sign Up Page</li>
                    <li>Forget my Password Page</li>
                  </ul>
                </p>
              </div>
            </Route>
          </Switch>
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
