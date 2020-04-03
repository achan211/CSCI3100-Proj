import React from 'react';
import { Link} from "react-router-dom";


let CourseList = (props) => {
   
   let renderCourseList = ()=>{ return(
        <React.Fragment>
            <h1> Here is the Course List page </h1>
            <h3>Please do the styling thanks.</h3>
            <h3>Requirements: I) N buttons as below, directing to the course landing page</h3>

            <Link className="link" to="/CSCI3100"><button>CSCI3100</button></Link>
            <Link className="link" to="/CSCI3130"><button>CSCI3130</button></Link>
            <Link className="link" to="/CSCI3120"><button>CSCI3120</button></Link>
            <Link className="link" to="/CSCI3110"><button>CSCI3110</button></Link>

        </React.Fragment>
    )
   }
   let RedirectToLogin = () =>{
    alert("You have not yet login!");
    const { history } = props;
    history.push('/login');
  }
    return (
        <React.Fragment>
        {localStorage.getItem( 'token' ) ? renderCourseList(): RedirectToLogin()}
        </React.Fragment>
    )
}

export default CourseList