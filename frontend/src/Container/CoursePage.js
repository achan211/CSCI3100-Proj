// PROGRAM – Program to render page content
// PROGRAMMER: So, Chi Fung
// CALLING SEQUENCE: return the JSX element, then call useffect. 
// VERSION 1: written 4-2-2020
// REVISION 1.1: written 4-5-2020
// PURPOSE: render page content
// DATA STRUCTURES: Json Data Type storing course details
import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Slider from "@material-ui/core/Slider";
import Snackbar from '../Component/SnackBar';
import axios from "axios"
import { UserType, UserCourseList } from "../test"
import DateFnsUtils from '@date-io/date-fns';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NotesIcon from '@material-ui/icons/Notes';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
const useStyles = makeStyles(theme => ({
    root: {
        width: 900,
    },

    mainGrid: {
        marginTop: theme.spacing(3),
    },

    media: {
        height: 140,
    },

    paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
    deadlinesPaper: {
        // minHeight: '25vh',
    },
    materialspaper: {
        minHeight: 'calc(40vh - 8px)',
    },
    updatespaper: {
        // maxHeight: 'calc(100vh - 100px)',
    },

    paperContent: {
        textAlign: 'left',
        justify: 'justified',
        fontSize: 16,

    },
    listitemHover: {
        "&:hover, &:focus": {
            backgroundColor: theme.palette.action.hover,
        }
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

}));

// This is a Course Home Page
export default function CoursePage(props) {
    const classes = useStyles();
    let [selectedFile, setSelectedFile] = useState()
    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-05-18T21:11:54'));
    let [message, setMessage] = useState('')

    const [open, setOpen] = React.useState(false);
    const [addMaterialsOpen, setAddMaterialsOpen] = useState(false)
    const [itemNumber, setItemNubmer] = React.useState(1);
    const [rating, setRating] = useState()
    const [ratingScore, setRatingScore] = useState()
    const [addUpdatesOpen, setAddUpdatesOpen] = useState()
    const [addType, setAddType] = useState()
    let [loading, setLoading] = useState()
    const [Course, setCourse] = useState([])
    let [success, setSuccess] = useState()
    let [alertMessage, setAlertMessage] = useState()
    let [openAlert, setOpenAlert] = useState()
    const [MessageType, setMessageType] = useState()
    const { courselist, courselistDispatch } = useContext(UserCourseList);
    const { userType } = useContext(UserType)

    var filtered;

    const handleClickOpen = (type) => {
        setOpen(type);
    };
    const handleClose = () => {
        setOpen(false);
    };

    //check if user is enrolled in that course
    let checkifEnrolled =()=>{
        filtered = courselist.length > 0 && Array.isArray(courselist) && courselist.filter(i => {
            return i.code === props.match.params.id
        })
        if ( filtered.length > 0) {
            return true 
        }else if (courselist.length > 0 ){
            window.location.href = 'http://localhost:3000/404'
        }
    }

    //reorder the updates noti
    useEffect(() => {
        if ( checkifEnrolled()) {
            filtered[0].updates.sort(function (a, b) {
                if (a.date > b.date) //sort  descending
                    return -1
                else
                    return 1
            })
            setCourse(filtered[0])
        }
       
    }, [courselist])

    //check if user can rate the course
    useEffect(() => {
        axios.get(`http://localhost:5000/rating/checkRatingMode/${Course.code}`, { withCredentials: true }).then(response => response.data).then((response) => {
            if (response.redirectURL) {
                //back to login
                window.location.href = 'http://localhost:3000' + response.redirectURL
            }
            else if (!response.error) {
                if (response.mode === 'Available')
                    setRating(response.id)
                else
                    setRating(false)
            }
        })
        
    }, [Course])

    //for teacher to add course updates to db
    let hanldeAddUpdates = () => {
        setLoading(true)
        axios.post(`http://localhost:5000/updates/postUpdates`, {
            'course': Course.code,
            'messagetype': MessageType,
            'message': message
        }, { withCredentials: true }).then(response => response.data).then((response) => {
            if (response.redirectURL) {
                //back to login
                window.location.href = 'http://localhost:3000' + response.redirectURL
            }
            else if (!response.error) {
                setSuccess(true)
                console.log(response)
                setAlertMessage('Success!')
                setOpenAlert(true)
                setLoading(false)
            } else {
                console.log(response)
                setSuccess(false)
                setAlertMessage(response.error)
                setLoading(false)
                setOpenAlert(true)
            }
        })
    }

    //for teacher to add course docs to db
    let hanldeUploadDoc = () => {
        //addtype
        setLoading(true)
        const formData = new FormData()
        // let username = JSON.parse(localStorage.getItem('info')).username

        formData.append('recfile', selectedFile)
        const requestOptions = {
            method: 'POST',
            body: formData
        };
        axios.post(`http://localhost:5000/uplloadMaterial/${Course.code}/${addType}/${message}/${selectedDate.toISOString()}`,
            formData
            , { withCredentials: true }).then(response => response.data).then((response) => {
                if (response.redirectURL) {
                    //back to login
                    window.location.href = 'http://localhost:3000' + response.redirectURL
                }
                else if (!response.error) {
                    setSuccess(true)
                    console.log(response)
                    setAlertMessage('Success!')
                    setOpenAlert(true)
                    setLoading(false)
                    setAddMaterialsOpen(false)
                    setAddType(false)
                } else {
                    console.log(response)
                    setSuccess(false)
                    setAlertMessage(response.error)
                    setLoading(false)
                    setOpenAlert(true)
                }
            })

    }


    //for teacher to turn off course rating
    let handleTurnOnOffRating = (type) => {
        axios.get(type ? `http://localhost:5000/rating/declare/${Course.code}` : `http://localhost:5000/rating/close/${rating}`,
            { withCredentials: true }).then(response => response.data).then((response) => {
                if (response.redirectURL) {
                    //back to login
                    window.location.href = 'http://localhost:3000' + response.redirectURL
                }
                else if (!response.error) {
                    setSuccess(true)
                    console.log(response)
                    setAlertMessage('Success!')
                    setOpenAlert(true)
                    setLoading(false)
                    setRating(type ? response.docs._id : 0)
                } else {
                    console.log(response)
                    setSuccess(false)
                    setLoading(false)
                    setOpenAlert(true)
                    setAlertMessage(response.error)
                }
            })

    }

    //for student to submite course rating
    let handleRateScoreSubmit = () => {
        axios.post(`http://localhost:5000/rating/post`, {
            'ratingScore': ratingScore,
            'id': rating
        }
            ,
            { withCredentials: true }).then(response => response.data).then((response) => {
                if (response.redirectURL) {
                    //back to login
                    window.location.href = 'http://localhost:3000' + response.redirectURL
                }
                else if (!response.error) {
                    setSuccess(true)
                    console.log(response)
                    setAlertMessage('Success!')
                    setOpenAlert(true)
                    setLoading(false)
                } else {
                    console.log(response)
                    setSuccess(false)
                    setLoading(false)
                    setOpenAlert(true)
                    setAlertMessage(response.error)
                }
            })
    }

    let renderUpdates = () => {
        if (Course && Course.updates) {
            return Course.updates.map((item, index) => {
                if (index < itemNumber * 4)
                    return (
                        <React.Fragment key={item._id}>
                            <ListItem>
                                <ListItemText
                                    primary={"type: " + item.type}
                                    secondaryTypographyProps={{ component: 'div' }}
                                    secondary={
                                        <React.Fragment>
                                            <p>Date: {item.date.slice(0, 10)}</p>
                                            <p>Type: {item.type}</p>
                                            <p>Message: {item.message}</p>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider className={classes.divider} />
                        </React.Fragment>
                    )
            })
        }
    }

    let renderCoursePage = () => {
        return (
            <React.Fragment>
                <div className={classes.app}>
                    {/* <CoursePageButton id={props.match.params.id} /> */}
                    <div className={classes.main}>
                        <Typography variant="h4" >
                            {Course && Course.code} {Course && Course.name}
                        </Typography>
                        <Divider className={classes.divider} />
                        <Grid container>
                            {/* Course Materials Upload & Download */}
                            <Grid item xs={12} md={6}>
                                <Paper className={`${classes.paper} ${classes.materialspaper}`} variant="elevation">
                                    <Typography variant="h5" noWrap>Course Materials</Typography>
                                    {userType === 'prof' && <Button onClick={() => setAddMaterialsOpen(true)} variant="contained" >Add Materials</Button>}
                                    <Divider className={classes.divider} />
                                    <div className={classes.paperContent}>
                                        <ListItem onClick={() => handleClickOpen('LectureNotes')} className={classes.listitemHover}>
                                            <ListItemIcon><NotesIcon /></ListItemIcon>
                                            <ListItemText>Lecture Notes </ListItemText>
                                        </ListItem>
                                        <Divider className={classes.divider} />
                                        <ListItem onClick={() => handleClickOpen('Tutorial')} className={classes.listitemHover}>
                                            <ListItemIcon><NotesIcon /></ListItemIcon>
                                            <ListItemText>Tutorial Notes </ListItemText>
                                        </ListItem>
                                        <Divider className={classes.divider} />
                                        <ListItem onClick={() => handleClickOpen('Assignment')} className={classes.listitemHover}>
                                            <ListItemIcon><AssignmentIcon /></ListItemIcon>
                                            <ListItemText>Assignment. </ListItemText>
                                        </ListItem>
                                        <Divider className={classes.divider} />

                                    </div>
                                </Paper>
                                {/* Assignment Deadlines */}
                                <Paper className={`${classes.paper} ${classes.deadlinesPaper}`} variant="elevation">
                                    <Typography variant="h5" noWrap>Deadlines for this course</Typography>
                                    <Divider className={classes.divider} />
                                    {Course && Course.materials && Course.materials['Assignment'] && Course.materials['Assignment'].length ?
                                        renderDaadLines() :
                                        <Typography variant="body1" noWrap>------No Deadlines Yet------</Typography>
                                    }
                                    <Divider className={classes.divider} />
                                </Paper>

                                {/* Simpple Course Evaluation */}
                                <Paper className={`${classes.paper} ${classes.deadlinesPaper}`} variant="elevation">
                                    <Typography variant="h5" >Rate This Course (Typically Open at Week 7 and Week 13)</Typography>
                                    <Divider className={classes.divider} />
                                    <Typography id="discrete-slider" gutterBottom>{Course.code}  {Course.name} </Typography>

                                    {userType === 'prof' ?
                                        <React.Fragment>
                                            {rating ?
                                                <React.Fragment>
                                                    <h5>Student Can Now Rate Your Course</h5>
                                                    <Button variant="contained" color="secondary"
                                                        onClick={() => handleTurnOnOffRating(false)}
                                                    >
                                                        Turn Off Course Evaluation</Button>
                                                </React.Fragment>
                                                :
                                                <Button variant="contained" color="primary"
                                                    onClick={() => handleTurnOnOffRating(true)}
                                                >
                                                    Turn On Course Evaluation</Button>
                                            }
                                            {loading && <h5>
                                                Loading.... </h5>}
                                        </React.Fragment>
                                        :
                                        <React.Fragment>
                                            <Slider
                                                disabled={rating ? false : true}
                                                defaultValue={10}
                                                getAriaValueText={(value) => setRatingScore(value)}
                                                aria-labelledby="discrete-slider"
                                                valueLabelDisplay="auto"
                                                step={1}
                                                marks
                                                min={0}
                                                max={10}
                                                marks={[{ value: 0, label: '0' }, { value: 1, label: '1' }, { value: 2, label: '2' },
                                                { value: 3, label: '3' }, { value: 4, label: '4' }, { value: 5, label: '5' }
                                                    , { value: 6, label: '6' }, { value: 7, label: '7' }, { value: 8, label: '8' }, { value: 9, label: '9' }, { value: 10, label: '10' },]}
                                            />
                                            <Button variant="contained" color="primary"
                                                disabled={rating ? false : true}
                                                onClick={handleRateScoreSubmit}
                                            >
                                                Submit </Button>
                                        </React.Fragment>

                                    }


                                    <Divider className={classes.divider} />
                                </Paper>
                            </Grid>
                            {/* Course Updates */}
                            <Grid item xs={12} md={6}>
                                <Paper className={`${classes.paper} ${classes.updatespaper}`} variant="elevation">
                                    <Typography variant="h5" noWrap>Course Updates</Typography>
                                    {userType === 'prof' && <Button onClick={() => setAddUpdatesOpen(true)} variant="contained" >Add Updates</Button>}
                                    <Divider className={classes.divider} />
                                    {renderUpdates()}
                                    {Course && Course.updates && Course.updates.length < itemNumber * 4 ?
                                        <div>
                                            <Typography variant="body1" noWrap>-------No More Updates-------</Typography>
                                            <Divider className={classes.divider} />
                                        </div>
                                        : <Button variant="contained" color="primary" onClick={() => setItemNubmer(itemNumber + 1)}>Read More</Button>
                                    }
                                </Paper>
                                {/* Dialogue */}
                                {open && <Dialog fullWidth={true} maxWidth={'md'} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                                    <DialogTitle id="form-dialog-title">{open}</DialogTitle>
                                    <DialogContent>
                                        {Course && Course.materials && Course.materials[open] && Course.materials[open].length ? renderCourseMaterials() :
                                            <div>
                                                <Typography variant="body1" noWrap>No Materials yet!</Typography>
                                                <Divider className={classes.divider} />
                                            </div>}
                                    </DialogContent>
                                </Dialog>}
                                {addMaterialsOpen && <Dialog fullWidth={true} maxWidth={'md'} open={addMaterialsOpen} onClose={() => setAddMaterialsOpen(false)} aria-labelledby="form-dialog-title">
                                    <DialogTitle id="form-dialog-title">Add Materials</DialogTitle>
                                    <DialogContent>
                                        <ListItem onClick={() => setAddType('LectureNotes')} className={classes.listitemHover}>
                                            <ListItemIcon><NotesIcon /></ListItemIcon>
                                            <ListItemText>Lecture Notes </ListItemText>
                                        </ListItem>
                                        <Divider className={classes.divider} />
                                        <ListItem onClick={() => setAddType('Tutorial')} className={classes.listitemHover}>
                                            <ListItemIcon><NotesIcon /></ListItemIcon>
                                            <ListItemText>Tutorial Notes </ListItemText>
                                        </ListItem>
                                        <Divider className={classes.divider} />
                                        <ListItem onClick={() => setAddType('Assignment')} className={classes.listitemHover}>
                                            <ListItemIcon><AssignmentIcon /></ListItemIcon>
                                            <ListItemText>Assignment </ListItemText>
                                        </ListItem>
                                        <Divider className={classes.divider} />
                                    </DialogContent>
                                </Dialog>}
                                {addType && <Dialog fullWidth={true} maxWidth={'md'} open={addType} onClose={() => setAddType(false)} aria-labelledby="form-dialog-title">
                                    <DialogTitle id="form-dialog-title">Add Materials</DialogTitle>
                                    <DialogContent>
                                        <List>
                                            <ListItem>
                                                <input type="file" name="recfile" onChange={(e) => setSelectedFile(e.target.files[0])} />

                                            </ListItem>
                                            <ListItem>
                                                <TextField fullWidth label="Message To Student" margin="dense"
                                                    // name="firstname"
                                                    type="text" rows="5" multiline
                                                    onChange={e => setMessage(e.target.value)}
                                                    variant="outlined" />
                                            </ListItem>

                                            {addType === 'Assignment' &&
                                                <ListItem>    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                    <KeyboardDatePicker
                                                        disableToolbar
                                                        variant="inline"
                                                        format="MM/dd/yyyy"
                                                        margin="normal"
                                                        id="date-picker-inline"
                                                        label="Set Deadline"
                                                        value={selectedDate}
                                                        onChange={date => setSelectedDate(date)}
                                                        KeyboardButtonProps={{
                                                            'aria-label': 'change date',
                                                        }}
                                                    />
                                                </MuiPickersUtilsProvider></ListItem>

                                            }
                                            <ListItem> <Button disabled={!selectedFile} onClick={hanldeUploadDoc} color="primary" variant="contained">
                                                Upload Document
                                            </Button>
                                            </ListItem>
                                            {loading && <ListItem>
                                                Loading.... </ListItem>}
                                        </List>
                                        <Divider className={classes.divider} />
                                    </DialogContent>
                                </Dialog>}
                                {addUpdatesOpen && <Dialog fullWidth={true} maxWidth={'md'} open={addUpdatesOpen} onClose={() => setAddUpdatesOpen(false)} aria-labelledby="form-dialog-title">
                                    <DialogTitle id="form-dialog-title">Add Updates</DialogTitle>
                                    <DialogContent>
                                        <List>
                                            <ListItem>
                                                <TextField fullWidth label="Type" margin="dense"
                                                    // name="firstname"
                                                    type="text"
                                                    onChange={e => setMessageType(e.target.value)}
                                                    variant="outlined" />
                                            </ListItem>
                                            <ListItem>
                                                <TextField fullWidth label="Message To Student" margin="dense"
                                                    // name="firstname"
                                                    type="text" rows="5" multiline
                                                    onChange={e => setMessage(e.target.value)}
                                                    variant="outlined" />
                                            </ListItem>
                                            <ListItem> <Button disabled={!MessageType} onClick={hanldeAddUpdates} color="primary" variant="contained">
                                                Add Updates
                                            </Button>
                                            </ListItem>
                                            {loading && <ListItem>
                                                Loading.... </ListItem>}
                                        </List>
                                        <Divider className={classes.divider} />
                                    </DialogContent>
                                </Dialog>}
                                <Snackbar
                                    success={success}
                                    Open={openAlert}
                                    AlertMessage={alertMessage}
                                    handleClose={() => {
                                        setOpenAlert(false)
                                    }}
                                />
                            </Grid>

                        </Grid>
                    </div>
                </div>

            </React.Fragment>

        )
    }
    let renderCourseMaterials = () => {
        return (
            <List>
                {Course.materials[open].map(item => {
                    return (
                        <React.Fragment>
                            <ListItem component="a" target="_blank" href={item.link} className={classes.listitemHover}>
                                <ListItemIcon><NotesIcon /></ListItemIcon>
                                <ListItemText>{item.name}</ListItemText>
                            </ListItem>
                            <Divider className={classes.divider} />


                        </React.Fragment>
                    )

                })}
            </List>
        )
    }
    let renderDaadLines = () => {
        return (
            <List className={classes.paperContent}>
                {Course.materials['Assignment'].map(item => {
                    return (
                        <React.Fragment>
                            <ListItem component="a" target="_blank" href={item.link} className={classes.listitemHover}>
                                <ListItemText
                                    primary={"Name:" + item.name}
                                    secondaryTypographyProps={{ component: 'div' }}
                                    secondary={
                                        <React.Fragment>
                                            <p>date: {item.deadline.slice(0, 10)}</p>
                                        </React.Fragment>
                                    }
                                />
                                <Divider className={classes.divider} />
                            </ListItem>
                        </React.Fragment>
                    )

                })}
            </List>
        )
    }
    return (
        <React.Fragment>
            {checkifEnrolled() ? renderCoursePage() : <div>Looading...</div>}
        </React.Fragment>
    )
}
