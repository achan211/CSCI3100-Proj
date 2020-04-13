import React, { useState, useReducer, useEffect, useContext, createContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import LoginPage from "./Container/LoginPage"
import SignUp from "./Container/Signup"
import ForgetPW from "./Container/forgetPW"
import Chatroom from "./Container/chatroom"
import ForumHome from "./Container/ForumHome"
import CoursePage from "./Container/CoursePage"
import Attendance from "./Container/Attendance"
import Header from "./Component/Header"
import Quiz from "./Container/Quiz"
import QuizHistory from "./Container/QuizHistory"
import Home from "./Container/home"
import NotificationPage from "./Container/NotificationPage"
import AddCourse from "./Container/AddCourse"
import UserProfile from "./Container/userProfile"
import QuizRecord from "./Container/QuizRecord"
import StartQuiz from "./Container/StartQuiz"
import ProfessorQuiz from "./Container/ProfessorQuiz"
import ProfessorStartQuiz from "./Container/ProfessorStartQuiz"
import CreateQuiz from "./Container/CreateQuiz"
import CourseRating from "./Component/rating"
import AdminInput from './Container/adminInput'
import Errorpage from './Container/Errorpage'
import Footer from './Component/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import history from './history';
import './App.css';
import UserCourseListReducer from "./Reducer/UserCourseListReducer";
import UserInfoReducer from "./Reducer/UserInfoReducer";
import UserTypeReducer from "./Reducer/UserTypeReducer";
import axios from "axios"


import { UserCourseList, UserInfo, UserType } from "./test"

const useStyles = makeStyles(theme => ({
  // App: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   minHeight: '100vh',
  // },
}));
function App() {
  const classes = useStyles();

  const [courselist, courselistDispatch] = useReducer(UserCourseListReducer, []);
  const [userType, userTypeDispatch] = useReducer(UserTypeReducer, '');

  //get the course that user enrolled
  useEffect(() => {
    // get user courselist and type
    if (!checkifURLContainsString()) {
      axios.post('http://localhost:5000/', {}, { withCredentials: true }).then(response => response.data).then((response) => {
        console.log(response)
        if (response.redirectURL) {
          //back to login
          window.location.href = 'http://localhost:3000' + response.redirectURL
        }
        else if (!response.error) {
          courselistDispatch({ type: 'ADD_COURSE', payload: response.docs })
          userTypeDispatch({ type: 'ADD_TYPE', payload: response.type })
        }
        else {
          courselistDispatch({ type: 'ADD_COURSE', payload: response.error })
          userTypeDispatch({ type: 'ADD_TYPE', payload: response.type })
        }
      })
    }



  }, [])

  let checkifURLContainsString = () => {
    if( (window.location.href.indexOf("login") > -1 || window.location.href.indexOf("signup") > -1 || window.location.href.indexOf("welcome") > -1))
      return true
    else if (window.location.href=== 'http://localhost:3000/'){
      window.location.href = 'http://localhost:3000/welcome'
return false
    }

      return false
  }


  console.log(courselist)
  console.log(userType)
  return (
    <Router history={history}>
      <div className="App">
        <div>
          <UserCourseList.Provider value={{
            courselist: courselist,
            courselistDispatch
          }}>
            <UserType.Provider value={{
              userType: userType,
              userTypeDispatch
            }}>
              {!checkifURLContainsString() &&  window.location.href !== 'http://localhost:3000/' && <Header />}
              <Switch>
                <Route path="/Attendance" render={(props) =>
                  <Attendance {...props} />
                }
                />
                <Route exact path="/login" render={(props) =>
                  <LoginPage {...props} />
                }
                />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/forgetpw" component={ForgetPW} />
                <Route path="/Chatroom" component={Chatroom} />
                <Route path="/ForumHome" component={ForumHome} />
                <Route path="/NotificationPage" component={NotificationPage} />
                <Route path="/AddCourse" component={AddCourse} />
                <Route path='/Quiz/history/:course' component={QuizHistory} />
                <Route path='/Quiz/history/' component={QuizHistory} />
                <Route path="/Quiz" component={Quiz} />
                <Route path="/QuizRecord" component={QuizRecord} />
                <Route path="/StartQuiz" component={StartQuiz} />
                <Route path="/userProfile" component={UserProfile} />
                <Route path="/ProfessorQuiz" component={ProfessorQuiz} />
                <Route path="/ProfessorStartQuiz" component={ProfessorStartQuiz} />
                <Route path="/CreateQuiz" component={CreateQuiz} />

                <Route path="/rating" component={CourseRating} />
                <Route path="/adminInput" component={AdminInput} />
                <Route path="/404" component={Errorpage} />
                <Route path="/home/:id" component={CoursePage} />
                <Route exact path="/home" component={Home} />
                <Route path="/welcome" >
                  <h1>welcome PAge</h1>
                  <p>login : /login</p>
                </Route>
                <Route path="/" >
                <idv>redirecting...</idv>
                </Route>
              </Switch>
            </UserType.Provider>
          </UserCourseList.Provider>
        </div>
        {/* </React.Fragment> */}
        <Footer />

      </div>
    </Router>

  );
}
export default App;

