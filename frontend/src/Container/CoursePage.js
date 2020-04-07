import React from 'react';
import { Link } from "react-router-dom";
let CoursePage = (props) => {

    let renderCoursePage = () => {
        return (
            <React.Fragment>
                <div className="generalGridContainer">
                    <div>
                        <h3>Requirements: I)Prof Updates area, showing the updates of the course</h3>
                        <div>
                            <h3>Prof Updates:</h3>
                            <p>dfkjiolsdbkjz  </p>
                            <p>dfkjiolsdbkjz  </p>
                            <p>dfkjiolsdbkjz  </p>
                            <p>dfkjiolsdbkjz  </p>
                            <p>dfkjiolsdbkjz  </p>
                        </div>
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


    console.log(localStorage.getItem('token'))
    return (
        <React.Fragment>
            {localStorage.getItem('token') ? renderCoursePage() : RedirectToLogin()}
        </React.Fragment>
    )
}

export default CoursePage