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
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';


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
    button: {
        margin: theme.spacing(1),
      },
}));


let Quiz_Record = (props) => {
    const classes = useStyles();

    let renderQuizRecord = () => {
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
                                                <ListItem button>
                                                    <ListItemText primary = "CSCI3100" />
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemText primary = "CSCI4430" />
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemText primary = "ENGG1120" />
                                                </ListItem>
                                            </List>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={8}>                                          
                                            <Button className={classes.button} variant="outlined" color = "primary" startIcon={<ChevronLeftIcon /> } >Previous Quiz</Button>
                                            <Button className={classes.button} variant="outlined" color = "primary" startIcon={<HomeIcon />} onClick={()=>{window.location.href="/home"}} >Back to Home page</Button>
                                            <Button className={classes.button} variant="outlined" color = "primary" endIcon={<ChevronRightIcon />} >Next Quiz</Button><br />
                                         
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
            {localStorage.getItem('token') ? renderQuizRecord() : RedirectToLogin()}
        </React.Fragment>
    )
}

export default Quiz_Record
