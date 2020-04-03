import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, List, ListItem } from "@material-ui/core";
import Dialog from "../Component/Dialog";
import Chat from "../Component/chat";
import CoursePageButton from "../Component/CoursePageButton"

const useStyle = makeStyles({
  paper: {
    marginLeft: '50px',
    marginRight: '50px',
  }
})
let Chatroom = (props) => {
  const classes = useStyle()
  return (
    <React.Fragment>
      <div className="generalGridContainer">
        <CoursePageButton id={props.match.params.id} />
        <div>
          <Paper className={classes.paper}>
            <div><h1>Course ID:{props.match.params.id}</h1></div>
            <div style={{ textAlign: 'left' }}><h1 style={{ color: 'blue' }}>Messenger</h1></div>
            <Grid container>
              <Grid item xs={5}>
                <List>
                  <Dialog message="Hello" name="Alice" />
                  <Dialog message="Hello" name="Bob" />
                  <Dialog message="Hello" name="Charlie" />
                </List>
              </Grid>
              <Grid item xs={7}>
                <List>
                  <Chat message="hello" name="Bob" />
                  <Chat message="Hi" name="Bob" />
                  <Chat message="Hi you2" name="Alice" />
                  <Chat message="8" name="Alice" />

                </List>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    </React.Fragment>


  );
}
export default Chatroom