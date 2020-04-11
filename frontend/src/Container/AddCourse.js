import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import Autocomplete from '@material-ui/lab/Autocomplete';
const useStyles = makeStyles(theme => ({
  title: {
    color: '#B9B9B9',
    paddingTop: '15px',
    paddingBottom: '15px'
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
    minHeight: 'calc(100vh - 80px)'
  },

  paperContent: {
    textAlign: 'left',
    justify: 'justified',
    width: '60%',
    margin: '0 auto'
  },
  completeBox: {
    padding: '30px 0',
    width: '70%'
  },
  message: {
    paddingBottom: '25px',
  }


}));
let AddCourse = (props) => {
  const classes = useStyles();
  let [AvaCourse, setAvaCourse] = useState()
  let [Course, setCourse] = useState()
  let [Message, setMessage] = useState('')
  let [Open, setOpen] = useState('')
  let [AlertMessage, setAlertMessage] =useState()


  useEffect(() => {
    //fetch all course avaiable
    fetch('http://localhost:5000/')
      .then(response => response.json())
      .then(response => {
        if (!response.error) {
          console.log(response)
          setAvaCourse(response)
        }
        else
          setAvaCourse('no course yet')

      });

  }, [])

  let handleSubmit = () => {
    //submit request
    if (Course) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          'code': Course.code,
          'studentusername': JSON.parse(localStorage.getItem('info')).username,
          'message': Message
        })
      };
      fetch('http://localhost:5000/user/requestAddCourse', requestOptions)
        .then(response => response.json())
        .then(response => {
          if (!response.error) {
            setMessage('')
            setAlertMessage('Success!')
            setOpen(true)
          }
          else{
            setMessage('')
            setAlertMessage(response.error)
            setOpen(true)
          }
         

        });
    } else {
      setAlertMessage('please select a course!')
      setOpen(true)
    }
  }

  const handleClose = () => {
    setOpen(false)
  };

  let renderAddCourse = () => {
    return (
      <React.Fragment>
        <Grid container>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div className={classes.paperContent}>
                <Typography variant="h4" noWrap className={classes.title}>
                  Select To Sit In On A Course
                            </Typography>
                <Typography variant="body1" gutterBottom>
                  When You click submit, Professor will receive a notification regarding your sit in course request.

                            </Typography>
                <Typography variant="body1" gutterBottom>
                  If professor approves your sit in request, you will be able to visit the course page and use the course materials

                            </Typography>
                <Autocomplete
                  id="combo-box-demo"
                  options={AvaCourse}
                  autoFocus
                  className={classes.completeBox}
                  getOptionLabel={(AvaCourse) => AvaCourse.code}
                  onChange={(e, value) => setCourse(value)}
                  renderInput={(params) => <TextField {...params} label="Search or select for a course" variant="outlined" />}
                />
                <TextField
                  className={classes.message}
                  
                  value={Message}
                  onChange={e => setMessage(e.target.value)}
                  margin="dense" id="comments"
                  variant="outlined" label="Anything you would like to tell professsor" type="text" rows="15"
                  fullWidth multiline />

                <Button variant="contained" color="primary" href="#contained-buttons" onClick={handleSubmit}>
                  Submit Request
                            </Button>
              </div>
            </Paper>
            {/* </div> */}
          </Grid>

        </Grid>

        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          key={`top,$left`}
          open={Open}
          onClose={handleClose}>
          <SnackbarContent style={{
            backgroundColor: AlertMessage === "Success!"  ? '#84DE02' : '#FFBF00'  ,
          }}
            message={<span id="client-snackbar">{AlertMessage}!</span>}
          />
        </Snackbar>

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
      {renderAddCourse()}
    </React.Fragment>
  )
}

export default AddCourse
