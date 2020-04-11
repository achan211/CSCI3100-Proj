import React, { useState, useReducer, useContext } from 'react';
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
import { UserInfo } from "../test"

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
  const { userinfo, userinfoDispatch } = useContext(UserInfo);

  let handleSubmit = () => {
    if (username.length > 0 && pw.length > 0) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          'username': username,
          'pw': pw
        })
      };
      fetch('http://localhost:5000/login', requestOptions)
        .then(response => response.json())
        .then(response => {
          const { history } = props;
          if (response._id) {
            alert("Success!!");
            HandleMapSateToProps(response)
            history.push('/');
          }
          else
            alert("Wrong PW or AC!")
        });
    }
  }

  let HandleMapSateToProps = (studentDetails) => {
    userinfoDispatch({ type: 'ADD_USERINFO', payload: studentDetails})
    localStorage.setItem('info', JSON.stringify(studentDetails))
    localStorage.setItem('token', studentDetails._id)

    console.log(localStorage.getItem("token"))
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
                  label="User Name"
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
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
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
      {localStorage.getItem('token') ? RedirectToHome() : LoginPage()}
    </React.Fragment>

  );
}
export default LoginPage


