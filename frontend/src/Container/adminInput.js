// PROGRAM – Program to render page content
// PROGRAMMER: So, Chi Fung
// CALLING SEQUENCE: return the JSX element, then call useffect. 
// VERSION 1: written 4-2-2020
// REVISION 1.1: written 4-5-2020
// PURPOSE: render page content
// DATA STRUCTURES: Json Data Type storing course details
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Autocomplete from '@material-ui/lab/Autocomplete';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { CSVReader } from 'react-papaparse'
import axios from "axios";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
    csvuploadContainer: {
        marginBottom: '75px'
    }
}));

// As title, a list of Course Offering Department
const CourseOfferingDepartment = [
    { long: "Accountancy", short: "ACCT" },
    { long: "Artifical Intelligence: Systems and Technologies", short: "AIST" },
    { long: "Mathematics and Mathematics Education", short: "BMED" },
    { long: "Computer Science", short: "CSCI" },
    { long: "Communication", short: "COMM" },
    { long: "Education", short: "EDUC" },
    { long: "English", short: "ENGE" },
    { long: "Mathematics", short: "MATH" },
    { long: "Music", short: "MUSC" },
    { long: "Physics", short: "PHYS" },
    { long: "Social", short: "SOWK" },
    { long: "Statistics", short: "STAT" },
    { long: "Translation", short: "TRANS" },
];

export default function AdminInput() {
    const classes = useStyles();
    const [course, SetCourse] = useState({
        department: '',
        code: "",
        title: '',
        lecturer: '',
        username: '',
        student: []
    })
    const handleChange = event => {
        SetCourse({
            ...course,
            [event.target.name]: event.target.value
        });
    };
    const handleDepartmentChange = (event, value) => {
        SetCourse({
            ...course,
            department: value && value.long
        });
    }
    console.log(course)
    let handleOnDrop = (data) => {
        console.log('---------------------------')
        data.shift()
        SetCourse({
            ...course,
            student: data && data.map(i => i.data[0])
        })
        console.log('---------------------------')
        
    }

    let handleOnError = (err, file, inputElem, reason) => {
        console.log(err)
    }

    let handleOnRemoveFile = (data) => {
        console.log('---------------------------')
        console.log(data)
        console.log('---------------------------')
    }
    
    // add course to database
    let addCourseToDB = () => {
        if (course.department.length > 0 && course.code.length > 0 && course.title.length > 0 && course.lecturer.length > 0 && course.username.length > 0){
            axios.post(`http://localhost:5000/admin`, course, { withCredentials: true }).then(response => response.data).then((response) => {
            if (response.redirectURL) {
                //back to login
                window.location.href = 'http://localhost:3000' + response.redirectURL
            }
            else if (!response.error) {
                console.log(response)
                alert("Success!")
            }
            else {
                console.log(response)
            }
        })
        }
        else{
            if (course.department.length == 0 && course.code.length == 0 && course.title.length == 0 && course.lecturer.length == 0 && course.username.length == 0){
                alert('No inputs !')
            }
            else{
                if (course.department.length == 0){
                    alert('Please enter course offering department')
                }
                if (course.code.length == 0){
                    alert('Please enter course code')
                }
                if (course.title.length == 0){
                    alert('Please enter course title')
                }
                if (course.lecturer.length == 0){
                    alert('Please enter lecturer name')
                }
                if (course.username.length == 0){
                    alert('Please enter username of lecturer')
                }
            }
        } 
       
        
    }
    let handleLogout = () => {
        axios.get(`http://localhost:5000/logout`, { withCredentials: true }).then(response => response.data).then((response) => {
            if (response.redirectURL) {
                //back to login
                window.location.href = 'http://localhost:3000' + response.redirectURL
            }
        })
    }

    return (
        // This part is for the administrator to input the Course Information (such as students, teacher, etc.)
        <React.Fragment>
            <div className={classes.app}>

                <Container component="main">
                    <div>
                    <IconButton color="inherit"
                        onClick={handleLogout}
                    ><ExitToAppIcon /></IconButton>
                    </div>
                    <Paper className={classes.paper}>
                        
                        <SupervisorAccountIcon fontSize="large" />
                        <Typography component="h3" variant="h4">
                            Admin Input Page
                </Typography>
                        <Divider className={classes.divider} />
                        <form className={classes.form} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography component="h6" variant="h6"> Add Student To Course (Format: 1 Column Named Student, follow with student's username)</Typography>
                                    <img src='https://i.imgur.com/V01eYDv.jpg'></img>
                                    <div className={classes.csvuploadContainer}>
                                        <CSVReader
                                            onDrop={handleOnDrop}
                                            onError={handleOnError}
                                            addRemoveButton
                                            onRemoveFile={handleOnRemoveFile}
                                        >
                                            <span>Drop CSV file here to add student to course.</span>
                                        </CSVReader>
                                    </div>

                                </Grid>
                                <Grid item xs={12}>


                                    <Typography component="p" variant="h6"> Student List: </Typography>

                                    {course.student.map(i => {
                                        return (
                                            <Typography component="div" variant="subtitle1"> {i}</Typography>

                                        )
                                    })}
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Autocomplete id="Course-Dept" options={CourseOfferingDepartment} getOptionLabel={(option) => option.short + ' - ' + option.long}
                                        onChange={handleDepartmentChange} renderInput={(params) => <TextField {...params} name='department' label="Course Offering Department" variant="outlined" />} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth helperText="4-digit Code of the Course" label="Course Code" margin="dense"
                                        onChange={handleChange} name="code" required variant="outlined" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Course Title" margin="dense"
                                        onChange={handleChange} name="title" required variant="outlined" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Course Lecturer" margin="dense"
                                        onChange={handleChange} name="lecturer" required variant="outlined" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth onChange={handleChange} label="Username of Lecturer" margin="dense" name="username" required variant="outlined" />
                                </Grid>

                            </Grid>
                        </form>
                        <Divider className={classes.divider} />
                        <Button onClick={addCourseToDB} variant="contained" color="primary">Submit</Button>
                    </Paper>
                   
                </Container>
            </div>
        </React.Fragment>
    )
}
