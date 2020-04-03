import React, { useState, useReducer, useContext, createContext } from 'react';
import logo from './logo.svg';
import LoginPage from "./Container/LoginPage"
import SignUp from "./Container/Signup"
import ForgetPW from "./Container/forgetPW"
import Chatroom from "./Container/chatroom"
import ForumHome from "./Container/ForumHome"
import ForumComments from "./Container/ForumComments"
import CoursePage from "./Container/CoursePage"
import Attendance from "./Container/Attendance"
import Quiz from "./Container/Quiz"
import Home from "./Container/home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import history from './history';
import './App.css';
import TokenReducer from "./Reducer/TokenReducer";
import { MyContext } from "./test"

function App() {


  // const [state, stateDispatch] = useReducer(TokenReducer, {});

  return (
    <div className="App">
      <Router history={history}>
        <React.Fragment>
          <nav className="nav">
            {/* <div>hi state{state.token}</div> */} 
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/login">Login</Link>
            <Link className="link" to="/TEST/ForumHome">Forum Home</Link>
            <Link className="link" to="/TEST/ForumComments">Forum Thread Comments</Link>
          </nav>

          <Switch>
            {/* <Route path="/login" render={(props)=><MyContext.Provider value={{
                state: state,
                stateDispatch
              }}>
                <LoginPage {...props} />
              </MyContext.Provider>}
            /> */}
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUp} />
            <Route path="/forgetpw" component={ForgetPW} />
            <Route path="/:id/Chatroom" component={Chatroom} />
            <Route path="/:id/ForumHome" component={ForumHome} />
            <Route path="/:id/ForumComments" component={ForumComments} />
            <Route path="/:id/Attendance" component={Attendance} />
            <Route path="/:id/Quiz" component={Quiz} />
            <Route path="/:id" component={CoursePage} />
            
            <Route exact path="/" component={Home}/>
            <Route path="/" >
              <h1>404 error</h1>
            </Route>
          </Switch>
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;

