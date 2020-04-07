import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Header from "../Component/Header"
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NotesIcon from '@material-ui/icons/Notes';
import AssignmentIcon from '@material-ui/icons/Assignment';

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
    
    paperContent: {
        textAlign: 'left',
        justify: 'justified',
        fontSize: 16,
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

export default function CoursePage(props){
    const classes = useStyles();

    let renderCoursePage = () => {
        return (
            <React.Fragment>
                <div className={classes.app}>
                    {/* <CoursePageButton id={props.match.params.id} /> */}
                    <div className={classes.main}>
                        <Typography variant="h4" noWrap>
                            Course Title (Could you help me fix it thanks...)
                        </Typography>
                        <Divider className={classes.divider} />
                        <Grid container>
                            {/* Course Updates */}
                            <Grid item xs={6}>
                                <Paper className={classes.paper} variant="elevation">
                                    <Typography variant="h5" noWrap>Course Updates</Typography>
                                    <Divider className={classes.divider} />
                                    <div className={classes.paperContent}>
                                        This is the content of the course update made by the professor. 
                                        Only the latest will be shown. If student would like to read more, then there would be a
                                        button "Read More" which would redirect to another page, showing all of the updates or announcements made 
                                        by the professor.
                                        <Divider className={classes.divider} />
                                    </div>
                                    <Button variant="contained" color="primary">Read More</Button>
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className={classes.paper} variant="elevation">
                                    <Typography variant="h5" noWrap>Deadlines for this course</Typography>
                                    <Divider className={classes.divider} />
                                    <div className={classes.paperContent}>
                                        I'm still wondering if it's a good idea to put the deadlines in here...
                                        or maybe we can just ignore this function ha ha. But if that's the case then
                                        what should we include in here? Mindblown...I hate freeriders...
                                        <Divider className={classes.divider} />
                                    </div>
                                </Paper>
                            </Grid>
                            {/* Course Materials */}
                            <Grid item xs={12}>
                                <Paper className={classes.paper} variant="elevation">
                                    <Typography variant="h5" noWrap>Course Materials</Typography>
                                    <Divider className={classes.divider}/>
                                    <div className={classes.paperContent}>
                                        <ListItem>
                                            <ListItemIcon><NotesIcon /></ListItemIcon>
                                            <ListItemText>This is a lecture note. </ListItemText>
                                        </ListItem>
                                        <Divider className={classes.divider} />
                                        <ListItem>
                                            <ListItemIcon><AssignmentIcon /></ListItemIcon>
                                            <ListItemText>And this is an assignment. </ListItemText>
                                        </ListItem>
                                        <Divider className={classes.divider} />
                                        <ListItem>
                                            <ListItemIcon><NotesIcon /></ListItemIcon>
                                            <ListItemText>To download the contents, once would simply need to click the texts. </ListItemText>
                                        </ListItem>
                                        <Divider className={classes.divider} />
                                        <ListItem>
                                            <ListItemIcon><NotesIcon /></ListItemIcon>
                                            <ListItemText>Though I'm still figuring out how to do that. </ListItemText>
                                        </ListItem>
                                        <Divider className={classes.divider} />
                                    </div>
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


    console.log(localStorage.getItem('token'))
    return (
        <React.Fragment>
            {localStorage.getItem('token') ? renderCoursePage() : RedirectToLogin()}
        </React.Fragment>
    )
}
