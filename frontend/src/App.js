import React from 'react';
import logo from './logo.svg';
import LoginPage from "./LoginPage"
import SignUp from "./Signup"
import ForgetPW from "./forgetPW"
import Chatroom from "./chatroom"
import ForumHome from "./ForumHome"
import ClassForum from "./ClassAForum"
import ForumComments from "./ForumComments"
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
          <nav className="nav">
      
                <Link className="link" to="/">Index</Link>
        
                <Link className="link" to="/login">Login</Link>
          
                <Link className="link" to="/signup">Sign Up</Link>
           
                <Link className="link" to="/forgetpw">Forget Password</Link>
            
                <Link className="link" to="/chatroom">Chatroom</Link>
        
                <Link className="link" to="/ForumHome">Forum Home</Link>
            
                <Link className="link" to="/ClassAForum">Class A Forum</Link>

                <Link className="link" to="/ForumComments">Forum Thread Comments</Link>
           
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
            <Route path="/ForumHome">
              <ForumHome />
            </Route>
            <Route path="/ClassAForum">
              <ClassForum />
            </Route>
            <Route path="/ForumComments">
              <ForumComments />
            </Route>

            <Route path="/">
              <div >
                <h2>CUHK Live Classroom</h2>
                <p>Alvin's Update:
                  I have included the following items: 
                  <ul>
                    <li>Forum Home Page</li>
                    <li>Class Forum Page</li>
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

