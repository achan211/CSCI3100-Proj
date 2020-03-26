import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Header from './ForumHeader';
import Footer from './ForumFooter';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },

  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },

  Button: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
  },
}));

const sections = [
    // This part will shows all of the forums that the user have joined. 
  { title: 'Class A Forum', url: 'ClassAForum' },
  { title: 'Class B Forum', url: '#' },
  { title: 'Class C Forum', url: '#' },
  { title: 'Class D Forum', url: '#' },
  { title: 'Class E Forum', url: '#' },
];

export default function ForumHome() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="CUHK Live Classroom (Forum - Home Page)" sections={sections} />

        {/* Threads */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            Thread 1: Each time we show the latest 5 threads from all of the forums that the user joined. 
            <br />
            -- From Class A
          </Paper>
          <Paper className={classes.paper}>
            Thread 2: When click "Show more" n times, below, it should show latest 5*n threads. # let's do some maths
            <br />
            -- From Class A
          </Paper>
          <Paper className={classes.paper}>
            Thread 3: We can see that threads are multilined. 
            Sleeping in his car was never the plan but sometimes things don't work out as planned. 
            This had been his life for the last three months and he was just beginning to get used to it. 
            He didn't actually enjoy it, but he had accepted it and come to terms with it. 
            Or at least he thought he had. 
            All that changed when he put the key into the ignition, 
            turned it and the engine didn't make a sound.
            <br />
            -- From Class A
          </Paper>
          <Paper className={classes.paper}>
            Thread 4: Search button at the top should be able to search for all threads related to input words. 
            <br />
            -- From Class A
          </Paper>
          <Paper className={classes.paper}>
            This is the Username: And this is thread content. Note that there is a "From Class XXX" which 
            indicates which forum this thread is from. 
            <br />
            -- From Class A
          </Paper>

          {/* Button */}
          <Button variant="outlined">Show more</Button>
          </Grid>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
