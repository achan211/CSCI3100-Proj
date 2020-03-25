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
    // This part will shows all of the forums (except the current forum) that the user have joined. 
  { title: 'Class B Forum', url: '#' },
  { title: 'Class C Forum', url: '#' },
  { title: 'Class D Forum', url: '#' },
  { title: 'Class E Forum', url: '#' },
];

export default function ClassForum() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="CUHK Live Classroom (Forum - Class A)" sections={sections} />
        <main>
            <h1>Threads:</h1>
          In this section the system will show all of the threads from Class A forum. 
        </main>
      </Container>
      <Footer />
    </React.Fragment>
  );
}