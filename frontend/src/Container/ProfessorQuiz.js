// PROGRAM – Program to render page content
// PROGRAMMER: So, Chi Fung
// CALLING SEQUENCE: return the JSX element, then call useffect. 
// VERSION 1: written 4-2-2020
// REVISION 1.1: written 4-5-2020
// PURPOSE: render page content
// DATA STRUCTURES: Json Data Type storing course details
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    app: {

        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    paper: {
        width: '100%',
        height: '100%',
        padding: theme.spacing(2),
    },
    main: {
        flex: 1,
    },
}));

let ProfessorQuiz = (props) => {
    const classes = useStyles();

    let renderQuiz = () => {
        return (
            <React.Fragment>
                <div className={classes.app}>
                    <div className={classes.main}>                     
                            <Typography variant="h4" align="center" noWrap>
                                <Typography variant="h4" align="left" noWrap>
                                    <Grid item xs={12}>Select Course</Grid>
                                </Typography>
                                <Grid container>
                                    <Grid item xs={4}>
                                        <Grid container>
                                        <List>
                                        <ListItem button component={Link} to="/Quiz">
                                            <ListItemText primary="CSCI3100" />
                                        </ListItem>
                                        <ListItem button button component={Link} to="/Quiz">
                                            <ListItemText primary="CSCI4430" />
                                        </ListItem >
                                        <ListItem button button component={Link} to="/Quiz">
                                            <ListItemText primary="ENGG1120" />
                                        </ListItem>
                                    </List>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Grid container direction="column"  alignItems="center"  justify="center">
                                        <Button variant="outlined" size="large" onClick={()=>{window.location.href="/Quiz"}}>Back to student Quiz page</Button><br />
                                            <br/>
                                            <Button variant="outlined" size="large" onClick={()=>{window.location.href="/CreateQuiz"}}>Create Quiz</Button><br />
                                           <br/>
                                            <Button variant="outlined" size="large" onClick={()=>{window.location.href="/ProfessorStartQuiz"}}>Start Quiz</Button><br />
                                            <br/>
                                            <Button variant="outlined" size="large" onClick={()=>{window.location.href="/QuizRecord"}}>View Student Statistics</Button><br />
                                        </Grid>   
                                    </Grid>
                                </Grid>
                            </Typography>
                        
                    </div>
                </div>
            </React.Fragment>
        )
    }
    let RedirectToLogin = () => {
        alert("You have not yet login!");
        const { history } = props;
        history.push('/login');
    }
    return (
        <React.Fragment>
            {localStorage.getItem('token') ? renderQuiz() : RedirectToLogin()}
        </React.Fragment>
    )
}

export default ProfessorQuiz
