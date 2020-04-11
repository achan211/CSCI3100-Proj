import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Header from "../Component/Header"
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NotesIcon from '@material-ui/icons/Notes';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckIcon from '@material-ui/icons/Check';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';

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
        // minHeight: '65vh',
    },

    paperContent: {
        textAlign: 'left',
        justify: 'justified',
        fontSize: 16,
       
    },
    listitemHover:{
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

export default function CoursePage(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [itemNumber, setItemNubmer] = React.useState(1);

    const handleClickOpen = (type) => {
        setOpen(type);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [Course, setCourse] = useState([])

    let info = localStorage.getItem('info');
    useEffect(() => {
        if (localStorage.getItem('token') && checkIfEnrolled()) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    'code': props.match.params.id,
                })
            };
            fetch('http://localhost:5000/', requestOptions)
                .then(response => response.json())
                .then(response => {
                    if (!response.error) {
                        console.log(response[0])
                        setCourse(response[0])

                    }
                    else
                        setCourse('no course yet')
                });
        }
    }, [])

    let checkIfEnrolled = () => {
        let code = JSON.parse(info).course
        let filtered = code.filter(i => {
            return i === props.match.params.id
        })
        if (filtered.length > 0) {
            return true
        }
        else {
            return false

        }
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
                                            <p>date: {item.date.slice(0, 10)}</p>
                                            <p>message: {item.type}</p>
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
                        <Typography variant="h4" noWrap>
                            {Course && Course.code} {Course && Course.name}
                        </Typography>
                        <Divider className={classes.divider} />
                        <Grid container>

                            <Grid item xs={6}>

                                <Paper className={`${classes.paper} ${classes.materialspaper}`} variant="elevation">
                                    <Typography variant="h5" noWrap>Course Materials</Typography>
                                    <Divider className={classes.divider} />
                                    <div className={classes.paperContent}>
                                        <ListItem onClick={() => handleClickOpen('Lecture Notes')} className={classes.listitemHover}>
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
                                <Paper className={`${classes.paper} ${classes.deadlinesPaper}`} variant="elevation">
                                    <Typography variant="h5" noWrap>Deadlines for this course</Typography>
                                    <Divider className={classes.divider} />
                                        {Course && Course.materials && Course.materials['Assignment'] &&  Course.materials['Assignment'].length ? 
                                        renderDaadLines():
                                            <Typography variant="body1" noWrap>------No Deadlines Yet------</Typography>
                                        }
                                        <Divider className={classes.divider} />
                                </Paper>
                            </Grid>
                            {/* Course Updates */}
                            <Grid item xs={6}>
                                <Paper className={`${classes.paper} ${classes.updatespaper}`} variant="elevation">
                                    <Typography variant="h5" noWrap>Course Updates</Typography>
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
                                <Dialog fullWidth={true} maxWidth={'md'} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                                    <DialogTitle id="form-dialog-title">{open}</DialogTitle>
                                    <DialogContent>
                                        {Course && Course.materials && Course.materials[open] &&  Course.materials[open].length ? renderCourseMaterials() :
                                         <div>
                                            <Typography variant="body1" noWrap>No Materials yet!</Typography>
                                            <Divider className={classes.divider} />
                                        </div>}
                                    </DialogContent>
                                </Dialog>
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
    let renderDaadLines = ()=>{
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
    let renderErrorMessage = () => {
        return (
            <React.Fragment>
                <div className={classes.app}>
                    <div className={classes.main}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Paper className={classes.paperAnnouncement} variant="elevation">
                                    <Typography variant="h4" align="center" justify="center" noWrap className={classes.Announcement}>
                                        Opps! <br />
                                You didn't register this course. Please check your URL. <br />
                                Or click the button below to redirect you back to Home Page.
                                </Typography>
                                    <Button variant="contained" color="primary">Home Page</Button>
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
            {localStorage.getItem('token') ? checkIfEnrolled() ? renderCoursePage() : renderErrorMessage() : RedirectToLogin()}
        </React.Fragment>
    )
}
