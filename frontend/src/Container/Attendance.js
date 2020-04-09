import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button'
import PeopleIcon from '@material-ui/icons/People';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        width: 900,
    },

    app: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    
    main: {
        flex: 1,
    },

    divider: {
        marginBottom: 10,
        marginTop: 8,
    }, 

    paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
    
    paperContent: {
        textAlign: 'left',
        justify: 'justified',
        fontSize: 16,
    }, 

    container: {
        maxHeight: 560,
    },

    tableHead: {
        fontSize: 22,
        textAlign: 'center',
    }, 

    tablecell: {
        fontSize: 16,
        textAlign: 'center',
    },
}));

let Attendance = (props) => {
    const classes = useStyles();

    let renderAttendace = () => {
        return (
            <React.Fragment>
                <div className={classes.app}>
                    <CssBaseline />
                    <div className={classes.main}>
                    <Typography variant="h4" noWrap>
                        My Attendance
                    </Typography>
                    <Divider className={classes.divider} />
                    <Grid container>
                        {/* List of Courses registered by the user / professor */}
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                            <TableContainer className={classes.container}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className={classes.tableHead}>
                                            <Typography variant="h4" noWrap>My Courses</Typography>
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    {/* User's Course List */}
                                    <TableBody>
                                        <TableRow><TableCell className={classes.tablecell}>This is Course Code: This is Course Title</TableCell></TableRow>
                                        <TableRow><TableCell className={classes.tablecell}>CSCI3100: Software Engineering</TableCell></TableRow>
                                        <TableRow><TableCell className={classes.tablecell}>MATH1050: Foundation of Modern Mathematics</TableCell></TableRow>
                                        <TableRow><TableCell className={classes.tablecell}>COSE1000: Press the Text</TableCell></TableRow>
                                        <TableRow><TableCell className={classes.tablecell}>COSE1001: If Prof. is taking attendance</TableCell></TableRow>
                                        <TableRow><TableCell className={classes.tablecell}>COSE1002: RHS will prompt user to enter 4-digit Number</TableCell></TableRow>
                                        <TableRow><TableCell className={classes.tablecell}>COSE1003: Otherwise prompt a dialog: No attendance required</TableCell></TableRow>
                                        <TableRow><TableCell className={classes.tablecell}>COSE2100: Demo to show it's scrollable</TableCell></TableRow>
                                        <TableRow><TableCell className={classes.tablecell}>COSE2500: Though it might not be necessary</TableCell></TableRow>
                                        <TableRow><TableCell className={classes.tablecell}>MATH3330: Big Data Computing</TableCell></TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            </Paper>
                        </Grid>
                        {/* If a Course is selected and prof is taking attendance, show below, 
                        otherwise return "No attendance required for this course"*/}
                        <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <PeopleIcon fontSize="large" /><br />
                            <Typography variant="h4" component="h4">Verify Your Attendance</Typography>
                            <Divider className={classes.divider} />
                            <Typography variant="h6" component="h5">Enter the 4 Digit Code your Teacher gave you</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField id="attendanceCode" label="4-digit Code" />
                                </Grid>
                            </Grid>
                            <Divider className={classes.divider} />
                            <Button variant="contained" color="primary">Continue</Button>
                        </Paper>
                        </Grid>
                    </Grid>
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
            {localStorage.getItem('token') ? renderAttendace() : RedirectToLogin()}
        </React.Fragment>
    )
}

export default Attendance
