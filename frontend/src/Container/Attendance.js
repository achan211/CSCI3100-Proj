import React from 'react';
import { Link } from "react-router-dom";
import Header from "../Component/Header"

let Attendance = (props) => {

    let renderAttendace = () => {
        return (
            <React.Fragment>
                <div className="generalGridContainer">
                    {/* <CoursePageButton id={props.match.params.id} /> */}
                    <Header />
                    <div>
                        <div><h1>This is Attendance Page</h1></div>
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
            {localStorage.getItem('token') ? renderAttendace() : RedirectToLogin()}
        </React.Fragment>
    )
}

export default Attendance
