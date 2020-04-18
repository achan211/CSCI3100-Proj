import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'


  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: theme.spacing(5),
    },

    mainIntroText: {
      fontSize: 22,
    },

    welcomePhoto: {
      width: "100%"
    },

    text: {
      fontSize: 20,
    },

    title: {
      fontSize: 24,
    },

    inGridText: {
      margin: "auto"
    }
  }));
  
  function Welcome() {
    const classes = useStyles();
  
    return (
        <React.Fragment>
            <CssBaseline />
            <Grid container spacing={3} className={classes.root}>
              <Grid item xs={12}><Typography variant="h3">Manage teaching and learning with CUHK Live Classroom</Typography></Grid>
              <Grid item xs={12}><Typography className={classes.mainIntroText} gutterBottom>
                CUHK Live Classroom helps students and teachers organize assignments, boost collaboration, <br />
                and foster better communication.
              </Typography>
              </Grid>
              <Grid item xs={12} sm={6}><img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              className={classes.welcomePhoto} /></Grid>
              <Grid item xs={12} sm={6} className={classes.inGridText}>
                <Typography variant="h5" gutterBottom className={classes.title}>Make teaching more productive, collaborative, and meaningful</Typography>
                <Typography variant="body1" gutterBottom color="textSecondary" className={classes.text}>CUHK Live Classroom combines Blackboard, Piazza, and all other educational software into one.
                With CUHK Live Classroom, educators can distribute assignments, grade and send feedback, and see everything in one place.</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom>All-in-One Course Page</Typography>
                <Typography variant="body1" color="textSecondary">
                  With the simple set-up provided by CUHK Live Classroom, each course can have a fully-built course page, installed with Updates, Lecture Notes, and Homework Distribution. 
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom>Forum System</Typography>
                <Typography variant="body1" color="textSecondary">
                  With the Forum System, students can ask, answer, and explore 24/7, under the guidance of their instructors
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom>Online Quiz System</Typography>
                <Typography variant="body1" color="textSecondary">
                  With the Online Quiz System, just write something la...
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom>Attendance System</Typography>
                <Typography variant="body1" color="textSecondary">
                  With the Attendance System, instructor can immediately know how many students attended the class. In addition, with the analysis of attendance and quiz score, 
                  students and instructors can monitor the learning progress. 
                </Typography>
              </Grid>
            </Grid>
      </React.Fragment>
      
    );
  }
  
  export default Welcome;