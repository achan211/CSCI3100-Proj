import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { CssBaseline, IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Autocomplete from '@material-ui/lab/Autocomplete';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

const useStyles = makeStyles(theme => ({
    app: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        flex: 1,
        marginTop: theme.spacing(4),
    },
    divider: {
        marginBottom: 10,
        marginTop: 8,
    }, 
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(10),
      },
      paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(1),
        marginTop: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
}));

const CourseOfferingDepartment = [
    {long: "Accountancy", short: "ACCT"}, 
    {long: "Artifical Intelligence: Systems and Technologies", short: "AIST"}, 
    {long: "Mathematics and Mathematics Education", short: "BMED"}, 
    {long: "Computer Science", short: "CSCI"}, 
    {long: "Communication", short: "COMM"}, 
    {long: "Education", short: "EDUC"}, 
    {long: "English", short: "ENGE"}, 
    {long: "Mathematics", short: "MATH"}, 
    {long: "Music", short: "MUSC"}, 
    {long: "Physics", short: "PHYS"}, 
    {long: "Social", short: "SOWK"}, 
    {long: "Statistics", short: "STAT"}, 
    {long: "Translation", short: "TRANS"}, 
];

export default function AdminInput() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.app}> 
            <Container component="main">
            <Paper className={classes.paper}>
                <SupervisorAccountIcon fontSize="large" />
                <Typography component="h3" variant="h4">
                    Admin Input Page
                </Typography>
                <Divider className={classes.divider} />
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <Autocomplete id="Course-Dept" options={CourseOfferingDepartment} getOptionLabel={(option) => option.short + ' - ' + option.long}
                        renderInput={(params) => <TextField {...params} label="Course Offering Department" variant="outlined" />} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField fullWidth helperText="4-digit Code of the Course" label="Course Code" margin="dense"
                        name="Course Code" required variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Course Title" margin="dense"
                            name="Course Title" required variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Course Description" margin="dense"
                            name="Course Description" rows="8" multiline required variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Course Lecturer" margin="dense"
                            name="Course Lecturer" required variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Username" margin="dense" name="Username" required variant="outlined" />
                        </Grid>
                        <Grid item xs={12}><Button variant="contained" color="primary">Add more Students</Button></Grid>
                    </Grid>
                </form>
                <Divider className={classes.divider} />
                <Button variant="contained" color="primary">Submit</Button>
                </Paper>
            </Container>
            </div>
        </React.Fragment>
    )
}
