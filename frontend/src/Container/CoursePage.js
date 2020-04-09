import React, {useState,useEffect} from 'react';
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
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

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
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };    
    const [Course, setCourse] = useState([])

    let info= localStorage.getItem('info');
    useEffect(()=>{
        if( localStorage.getItem('token') && checkIfEnrolled() ){
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                  'code' : props.match.params.id,
                })
              };
              fetch('http://localhost:5000/', requestOptions)
                .then(response => response.json())
                .then(response => {
                  if(!response.error){
                    console.log(response[0])
                    setCourse(response[0])
                   
                  }
                  else
                  setCourse('no course yet')
                });
        }
    },[])

    let checkIfEnrolled = () =>{
        let code = JSON.parse(info).course
         let filtered = code.filter(i=>{
            return i === props.match.params.id
        })
        if(filtered.length >0){
            return true
        }
        else{
            return false

        }
    }   
    let renderErrorMessage = () =>{
        return(
            <div>
                not yet enrolled this course!
                (need styling, thanks!)
            </div>
        )
    }

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
                                        button "Read More" which would open up a dialog for all of the updates, showing all of the updates or announcements made 
                                        by the professor.
                                        <Divider className={classes.divider} />
                                    </div>
                                    <Button variant="contained" color="primary" onClick={handleClickOpen}>Read More</Button>
                                </Paper>
                                {/* Dialogue */}
                                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">Updates from this Course</DialogTitle>
                                <DialogContent>
                                    This is an update. 
                                <Divider className={classes.divider} />
                                    This is also an update. Notice that updates maybe very long. 
                                <Divider className={classes.divider} />
                                </DialogContent>
                                </Dialog>
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
            {localStorage.getItem('token') ?  checkIfEnrolled()  ? renderCoursePage() : renderErrorMessage() : RedirectToLogin()}
        </React.Fragment>
    )
}
