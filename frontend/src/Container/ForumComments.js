import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Header from '../Component/ForumHeader';
import Footer from '../Component/ForumFooter';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  Button: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));

const sections = [
    // This part will shows all of the forums (except the current forum i.e. Class A) that the user have joined. 
  { title: 'Class B Forum', url: '#' },
  { title: 'Class C Forum', url: '#' },
  { title: 'Class D Forum', url: '#' },
  { title: 'Class E Forum', url: '#' },
];

export default function ClassForum() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="CUHK Live Classroom (Forum - Class A)" sections={sections} />
 
        {/* Main Thread */}
        <Grid container spacing={3}>
        <Grid xs={12}>
        <h2>
        <Paper className={classes.paper}>
          This is the Username: And this is thread content. Note that this part is multilined.
          Let me show your by using a random paragraph. 
          I love CSCI3100 so much that TA please give us an A!!! Although I am a minor student I still work very hard!!
          Sometimes I even thought that CS is my major and MATH is my minor lol...
        </Paper>
        </h2>
        
        {/* Comments */}
          <Paper className={classes.paper}>
            This is the username: And this is the main content of the comments. 
          </Paper>
          <Paper className={classes.paper}>
            Alvin: Everytime there will be latest 2 comments shown. When press "Show more" n times there will be latest 2*(n+1) comments. 
          </Paper>
          <Paper className={classes.paper}>
            Rocky Tuan: When press "Back to Forum" the web will redirect back to the Class XXX Forum, where the thread is located. 
          </Paper>
          </Grid>
        
        <Grid xs={12}>
        {/* Button */}
        <Button variant="outlined">Show more</Button>
        <Button variant="outlined" href="/ClassAForum">Back to Forum</Button>
        {/* Thread input text field */}
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="contents" fullWidth multiline label="Add comment!"/>
        </form>
        </Grid>
        <Grid xs={12}>
        {/* Button */}
        
        </Grid>

        </Grid>
      
      </Container>
      <Footer />
    </React.Fragment>
  );
}
