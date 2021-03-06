// PROGRAM – Program to render page content
// PROGRAMMER: So, Chi Fung
// CALLING SEQUENCE: return the JSX element, then call useffect. 
// VERSION 1: written 4-2-2020
// REVISION 1.1: written 4-5-2020
// PURPOSE: render page content
// DATA STRUCTURES: Json Data Type storing course details
import React, { useState, useEffect, useReducer, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import TokenReducer from "../Reducer/TokenReducer";
import axios from "axios"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        CUHK Live Classroom
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

let LoginPage = (props) => {
  const classes = useStyles();
  const initState = {
    'token': ''
  }
  const [username, setusername] = useState('');
  const [pw, setpw] = useState('');
  const [renderLogin,setRenderLogin]=useState()

  //check if user has loginned in
  useEffect(() => {
    axios.post('http://localhost:5000/', {}, { withCredentials: true }).then(response => response.data).then((response) => {

      console.log(response)
      if (!response.redirectURL) {
        //back to home
        window.location.href = 'http://localhost:3000/home'
      }else{
        //has not loginned in 
        setRenderLogin(true)
      }
    })
  },[])

  //submit login info to server
  let handleSubmit = () => {
    if (username.length > 0 && pw.length > 0) {

      axios.post('http://localhost:5000/login', {
        'username': username,
        'pw': pw
      }, { withCredentials: true }).then(response => response.data).then((response) => {
        // const { history } = props;
        console.log(response)
        if (response.redirectURL) {
          window.location.href = 'http://localhost:3000' + response.redirectURL

        }
        else {
          alert('Invalid Password!')
        }
      })
    }
    else {
      if (username.length == 0 ) 
      {
        alert('Please enter user name')
      }
      if(pw.length == 0)
      {
        alert('Please enter password')
      }
  }
  }


  let RedirectToHome = () => {
    alert("You have already loginned!");
    const { history } = props;
    // eslint-disable-next-line no-restricted-globals
    history.push('/');
  }

  let LoginPage = () => {
    return (
      <React.Fragment>


        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
          </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  value={username}
                  onChange={event => { setusername(event.target.value) }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={pw}
                  onChange={event => { setpw(event.target.value) }}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={handleSubmit}
                >
                  Sign In
            </Button>
                {/* <Grid container>
                  <Grid item xs={12}>
                    <Link href="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid> */}
                <Box mt={5}>
                  <Copyright />
                </Box>
              </form>
            </div>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }



  return (
    <React.Fragment>
      {renderLogin ? LoginPage(): <div>Loading...</div>}
    </React.Fragment>

  );
}
export default LoginPage


