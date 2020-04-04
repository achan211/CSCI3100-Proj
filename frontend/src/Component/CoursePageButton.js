import React from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

let CoursePageButton = (props) => {
    console.log(props)
    return (
        <div>
            <div><h1>Course ID: {props.id}</h1></div>
            <h3>Please do the styling on CoursePageButton.js thanks.</h3>
            {/* Button Group */}
            <ButtonGroup orientation="vertical" aria-label="vertical outlined primary button group">
                <Button>
                    <Link className="link" to={`/${props.id}/CoursePage`} style={{ textDecoration: 'none' }}>
                    CoursePage(Newest Update)
                    </Link>
                </Button>
                <Button>
                    <Link className="link" to={`/${props.id}/Attendance`} style={{ textDecoration: 'none' }}>
                        Take Attendance
                    </Link>
                </Button>
                <Button>
                    <Link className="link" to={`/${props.id}/Chatroom`} style={{ textDecoration: 'none' }}>
                        Class Chat Room
                    </Link>
                </Button>
                <Button>
                    <Link className="link" to={`/${props.id}/ForumHome`} style={{ textDecoration: 'none' }}>
                        Class Forum
                    </Link>
                </Button>
                <Button>
                    <Link className="link" to={`/${props.id}/Quiz`} style={{ textDecoration: 'none' }}>
                        Online Quiz
                    </Link>
                </Button>
            </ButtonGroup>
        </div>
    )

}

export default CoursePageButton
