import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './ForumHeader';
import Footer from './ForumFooter';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
    // This part will shows all of the forums that the user have joined. 
  { title: 'Class A Forum', url: 'ClassAForum' },
  { title: 'Class B Forum', url: '#' },
  { title: 'Class C Forum', url: '#' },
  { title: 'Class D Forum', url: '#' },
  { title: 'Class E Forum', url: '#' },
];

export default function ForumHome() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="CUHK Live Classroom (Forum - Home Page)" sections={sections} />
        <main>
            <h1>Latest threads:</h1>
          In this section the system will show the latest threads from all of the forums that the user joined. 
        </main>
      </Container>
      <Footer />
    </React.Fragment>
  );
}