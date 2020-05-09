import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import CustomSwiper from "../Component/CustomSwiper"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import {
  Link
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  rightToolBar: {
    marginLeft: 'auto',
    marginRight: -12,
    color: 'white !important'
  },

  conetent: {
    marginTop: '64px'
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
  },
  root: {
    minHeight: 'calc(100vh - 92px)',
    // maxHeight:'calc(100vh - 92px)',
  },
  paper:{
    width: '70%',
    margin: '50px auto'
  },
  paperContentWrapper:{
    padding: '55px',
    textAlign: 'left'
  },

  divider: {
    marginBottom: 10,
    marginTop: 8,
  },

}));

const Welcome = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>CUHK Live Classroom</Typography>
            <Button color="primary" className={classes.rightToolBar} size="large" component={Link} to="/login">Login/My Page</Button>
          </Toolbar>
        </AppBar>
        <div className={classes.conetent}>
        <Typography variant="h4" style={{marginTop: '100px'}} gutterBottom></Typography>
          <CustomSwiper />
          <Paper elevation={3} className={classes.paper} >
            <div className={classes.paperContentWrapper}>
            <Typography variant="h4">Tech Features</Typography>
            <Divider className={classes.divider} />
            <Typography variant="body1">1. Progressive Web App: Can be installed on mobile phone without submitting to digital distribution service platform (Google Play, App Store).</Typography>
            <img src='https://i.imgur.com/AUpDVIE.jpg'></img>
            <Divider className={classes.divider} />

            <Typography variant="body1">2. Single Page Application: No extra queries to the server to download pages.</Typography>
            <Divider className={classes.divider} />

            <Typography variant="body1">3. Responsive Web Design: Suitable for both mobile and desktop users.</Typography>
            <Divider className={classes.divider} />

            <Typography variant="body1">4. Data Visualization</Typography>
            <Divider className={classes.divider} />

            <Typography variant="body1">5. Framework used: React.Js, ExpressJs, MongoDB</Typography>
            <Divider className={classes.divider} />

            <Typography variant="body1">6. Archieved ALL optional features stated in CSCI3100 Project Requirement Specification</Typography>
            <Typography variant="body1">(Regression Analysis, Visualization, Access control mechanism, managing user, mobile support)</Typography>
            <Divider className={classes.divider} />

            <Typography variant="body1">7. Secure Cookies Login Authentication</Typography>
            

            <Divider className={classes.divider} />

            </div>
          </Paper>
        </div>
      </div>
    </React.Fragment>

    //   <React.Fragment>

    //       <CssBaseline />
    //       <Grid container spacing={3} className={classes.root}>
    //         <Grid  tiem xs={12}>


    //         </Grid>
    //         <Grid item xs={12}><Typography variant="h3">Manage teaching and learning with CUHK Live Classroom</Typography></Grid>
    //         <Grid item xs={12}><Typography className={classes.mainIntroText} gutterBottom>
    //           CUHK Live Classroom helps students and teachers organize assignments, boost collaboration, <br />
    //           and foster better communication.
    //         </Typography>
    //         </Grid>
    //         <Grid item xs={12} sm={6}><img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    //         className={classes.welcomePhoto} /></Grid>
    //         <Grid item xs={12} sm={6} className={classes.inGridText}>
    //           <Typography variant="h5" gutterBottom className={classes.title}>Make teaching more productive, collaborative, and meaningful</Typography>
    //           <Typography variant="body1" gutterBottom color="textSecondary" className={classes.text}>CUHK Live Classroom combines Blackboard, Piazza, and all other educational software into one.
    //           With CUHK Live Classroom, educators can distribute assignments, grade and send feedback, and see everything in one place.</Typography>
    //         </Grid>
    //         <Grid item xs={12} sm={6}>
    //           <Typography variant="h6" gutterBottom>All-in-One Course Page</Typography>
    //           <Typography variant="body1" color="textSecondary">
    //             With the simple set-up provided by CUHK Live Classroom, each course can have a fully-built course page, installed with Updates, Lecture Notes, and Homework Distribution. 
    //           </Typography>
    //         </Grid>
    //         <Grid item xs={12} sm={6}>
    //           <Typography variant="h6" gutterBottom>Forum System</Typography>
    //           <Typography variant="body1" color="textSecondary">
    //             With the Forum System, students can ask, answer, and explore 24/7, under the guidance of their instructors
    //           </Typography>
    //         </Grid>
    //         <Grid item xs={12} sm={6}>
    //           <Typography variant="h6" gutterBottom>Online Quiz System</Typography>
    //           <Typography variant="body1" color="textSecondary">
    //             With the Online Quiz System, just write something la...
    //           </Typography>
    //         </Grid>
    //         <Grid item xs={12} sm={6}>
    //           <Typography variant="h6" gutterBottom>Attendance System</Typography>
    //           <Typography variant="body1" color="textSecondary">
    //             With the Attendance System, instructor can immediately know how many students attended the class. In addition, with the analysis of attendance and quiz score, 
    //             students and instructors can monitor the learning progress. 
    //           </Typography>
    //         </Grid>
    //       </Grid>
    // </React.Fragment>

  );
}

export default Welcome;