import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Header from './ForumHeader';
import Footer from './ForumFooter';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

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
    margin: theme.spacing(1),
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
 
        {/* Threads */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            Thread 1: Each time we show the latest 5 threads. <br />
            {/* Comments */}
            <Link color="Black" noWrap variant="body2" href="./ForumComments">
            Every thread has a comment link at this place. 
            </Link>
          </Paper>
          <Paper className={classes.paper}>
            Thread 2: When click "Show more" n times, below, it should show latest 5*n threads. # let's do some maths <br />
            {/* Comments */}
            <Link color="Black" noWrap variant="body2" href="./ForumComments">
            Click to show comments.
            </Link>
          </Paper>
          <Paper className={classes.paper}>
            Thread 3: We can see that threads are multilined. 
            Sleeping in his car was never the plan but sometimes things don't work out as planned. 
            This had been his life for the last three months and he was just beginning to get used to it. 
            He didn't actually enjoy it, but he had accepted it and come to terms with it. 
            Or at least he thought he had. 
            All that changed when he put the key into the ignition, 
            turned it and the engine didn't make a sound. <br />
            {/* Comments */}
            <Link color="Black" noWrap variant="body2" href="./ForumComments">
            Click to show comments.
            </Link>
          </Paper>
          <Paper className={classes.paper}>
            Thread 4: Search button at the top should be able to search for all threads related to input words. <br />
            {/* Comments */}
            <Link color="Black" noWrap variant="body2" href="./ForumComments">
            Click to show comments.
            </Link>
          </Paper>
          <Paper className={classes.paper}>
            This is the Username: And this is thread content. Note that the textfield is also multilined. <br />
            {/* Comments */}
            <Link color="Black" noWrap variant="body2" href="./ForumComments">
            Click to show comments.
            </Link>
          </Paper>

        {/* Button */}
        <Button variant="outlined">Show more</Button>
        {/* Thread input text field */}
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="contents" fullWidth multiline label="Add new thread!"/>
        </form>
        </Grid>

      </Container>
      <Footer />
    </React.Fragment>
  );
}
