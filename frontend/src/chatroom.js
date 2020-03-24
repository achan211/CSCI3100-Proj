import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, List, ListItem } from "@material-ui/core";
import Dialog from "./Dialog";
import Chat from "./chat";

const useStyle = makeStyles({
    paper:{
        marginLeft:'50px',
        marginRight: '50px',
    }
})
export default function App() {
    const classes = useStyle()
  return (
      <Paper className={classes.paper}>
        <div style={{textAlign:'left'}}><h1 style={{color:'blue'}}>Messenger</h1></div>
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
              <Chat message="fuck" name="Bob" />
              <Chat message="fuck you2" name="Alice" />
              <Chat message="8" name="Alice" />

            </List>
          </Grid>
        </Grid>
      </Paper>
    
  );
}
