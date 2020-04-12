import React, { useState, useReducer, useEffect, useContext, createContext } from 'react';
import LoginPage from "./Container/LoginPage"
import SignUp from "./Container/Signup"
import ForgetPW from "./Container/forgetPW"
import Chatroom from "./Container/chatroom"
import ForumHome from "./Container/ForumHome"
import ForumComments from "./Container/ForumComments"
import CoursePage from "./Container/CoursePage"
import Attendance from "./Container/Attendance"
import Header from "./Component/Header"
import Quiz from "./Container/Quiz"
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

import { UserCourseList, UserInfo } from "./test"

function App() {
  //get the course that user enrolled
  useEffect(() => {
    if (localStorage.getItem('token')) {
      // get user's course 
      let code = localStorage.getItem('info');
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // 'code': JSON.parse(code).course,
          'code': JSON.parse(code).course,

        })
      };
      fetch('http://localhost:5000/', requestOptions)
        .then(response => response.json())
        .then(response => {
          if (!response.error) {
            courselistDispatch({ type: 'ADD_COURSE', payload: response })
          }
        });
    }

  }, [])



  const [courselist, courselistDispatch] = useReducer(UserCourseListReducer, []);
  const [userinfo, userinfoDispatch] = useReducer(UserInfoReducer, {});
  console.log(courselist)
  return (
    <div className="App">
      <Router history={history}>
        <React.Fragment>
          <Header />

          <UserCourseList.Provider value={{
            courselist: courselist,
            courselistDispatch
          }}>
            <UserInfo.Provider value={{
              userinfo: userinfo,
              userinfoDispatch
            }}>
              <Switch>


                <Route path="/Attendance" render={(props) =>
                  // <UserCourseList.Provider value={{
                  //   courselist: courselist,
                  //   courselistDispatch
                  // }}>
                  // <UserInfo.Provider value={{
                  //   userinfo: userinfo,
                  //   userinfoDispatch
                  // }}>
                    <Attendance {...props} />
                  // </UserInfo.Provider>
                  // </UserCourseList.Provider>
                }
                />
                <Route path="/login" render={(props) => 
                // <UserInfo.Provider value={{
                //   userinfo: userinfo,
                //   userinfoDispatch
                // }}>
                  <LoginPage {...props} />
                /* </UserInfo.Provider> */
                }
                />
                <Route path="/signup" component={SignUp} />
                <Route path="/forgetpw" component={ForgetPW} />
                <Route path="/Chatroom" component={Chatroom} />
                <Route path="/ForumHome" component={ForumHome} />
                <Route path="/:id/ForumComments" component={ForumComments} />
                <Route path="/NotificationPage" component={NotificationPage} />
                <Route path="/AddCourse" component={AddCourse} />
                <Route path="/Quiz" component={Quiz} />
                <Route path="/QuizRecord" component={QuizRecord} />
                <Route path="/StartQuiz" component={StartQuiz} />
                <Route path="/userProfile" component={UserProfile} />
                <Route path="/ProfessorQuiz" component={ProfessorQuiz} />
                <Route path="/ProfessorStartQuiz" component={ProfessorStartQuiz} />
                <Route path="/CreateQuiz" component={CreateQuiz} />

  				<Route path="/rating" component={CourseRating} />
 	   			<Route path="/adminInput" component={AdminInput} />
                <Route path="/:id" component={CoursePage} />
                <Route exact path="/" component={Home} />
                <Route path="/" >
                  <h1>404 error</h1>
                </Route>
              </Switch>
            </UserInfo.Provider>
          </UserCourseList.Provider>
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;

