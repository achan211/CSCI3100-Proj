// PROGRAM – Program to render page content
// PROGRAMMER: So, Chi Fung
// CALLING SEQUENCE: return the JSX element, then call useffect. 
// VERSION 1: written 4-2-2020
// REVISION 1.1: written 4-5-2020
// PURPOSE: render page content
// DATA STRUCTURES: Json Data Type storing course details
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/justin-so-4599bb162/">
        CUHK Live Classroom
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(4),
    // padding: theme.spacing(4, 0),
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    // <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">2019-2020 Semester 2 CSCI3100 Group 9 Project</Typography>
          <Copyright />
        </Container>
      </footer>
    // </div>

  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};