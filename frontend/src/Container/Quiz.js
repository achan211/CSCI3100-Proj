import React from 'react';
import { Link } from "react-router-dom";
import Header from "../Component/Header"

let Quiz = (props) => {

    let renderQuiz = () => {
        return (
            <React.Fragment>
                <div className="generalGridContainer">
                    {/* <CoursePageButton id={props.match.params.id} /> */}
                    <Header />
                    <div>
                        <div><h1>Course ID:{props.match.params.id}</h1></div>
                        <h1> Here is the Quiz page </h1>
                        <h3>Please do the styling thanks.</h3>
                     
                    </div>
                </div>


            </React.Fragment>
        )
    }
    let RedirectToLogin = () => {
        alert("You have not yet login!");
        const { history } = props;
        history.push('/login');
    }
    return (
        <React.Fragment>
            {localStorage.getItem('token') ? renderQuiz() : RedirectToLogin()}
        </React.Fragment>
    )
}

export default Quiz
