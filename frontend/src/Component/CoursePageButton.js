import React from 'react';
import { Link } from "react-router-dom";

let CoursePageButton = (props) => {
    console.log(props)
    return (
        <div>
            <div><h1>Course ID: {props.id}</h1></div>
            <h3>Please do the styling thanks.</h3>
            <h3>Requirements: I) 4 buttons as below.</h3>
            <Link className="link" to={`/${props.id}/CoursePage`}><button>CoursePage(Newest Update)</button></Link>
            
            <Link className="link" to={`/${props.id}/Attendance`}><button>Take Attendance</button></Link>
            <Link className="link" to={`/${props.id}/Chatroom`}><button>Chat Room</button></Link>
            <Link className="link" to={`/${props.id}/ForumHome`}><button>Forum</button></Link>
            <Link className="link" to={`/${props.id}/Quiz`}><button>Quiz</button></Link>

        </div>
    )

}

export default CoursePageButton