import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Footer from '../Component/ForumFooter';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';


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

  container: {
    maxHeight: 480,
  },

  tableHead: {
    fontSize: 18,
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

export default function ForumHome(props) {
  const classes = useStyles();
  {/* Will try to reduce the LIines of Codes later*/}
  return (
    <React.Fragment>
      <div className={classes.app}>
        <CssBaseline />
        <div className={classes.main}>
          <Typography variant="h4" noWrap>
            My Forum
           </Typography>
          <Divider className={classes.divider} />
          <Grid container>
            {/* Table for Forum Threads */}
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <TableContainer className={classes.container}>
                  <Table stickyHeader aria-label="sticky table">
                    {/* The header of the table shows the course name of that forum. 
                    Working on switching different forums*/}
                    <TableHead>
                      <TableRow>
                        <TableCell className={classes.tableHead} align="center">
                          This is the Course Title
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {/* Threads title */}
                      <TableRow><TableCell>
                        <ListItem>
                          <ListItemAvatar><Avatar /></ListItemAvatar>
                          <ListItemText>This is username: And this is the Thread Title. 
                          </ListItemText>
                        </ListItem>
                      </TableCell></TableRow>

                      <TableRow><TableCell>
                        <ListItem>
                          <ListItemAvatar><Avatar /></ListItemAvatar>
                          <ListItemText>Again this is username: So what if my thread title is very long? 
                            Well, this would happen. I'm really curious, though, 
                            what if the sentence is extremely long? See below: 
                          </ListItemText>
                        </ListItem>
                      </TableCell></TableRow>

                      <TableRow><TableCell>
                        <ListItem>
                          <ListItemAvatar><Avatar /></ListItemAvatar>
                          <ListItemText>Alvin CHAN: I am going to type a random paragraph-length title here. 
                            The greatest risk a speaker faces in building a TED Talk is having too much content. 
                            When you edit your talk, the first question to ask yourself is whether a given part of your speech
                            either adds to your premises or adds to your proof. 
                          </ListItemText>
                        </ListItem>
                      </TableCell></TableRow>

                      <TableRow><TableCell>
                        <ListItem>
                          <ListItemAvatar><Avatar /></ListItemAvatar>
                          <ListItemText>Prof. Michael LYU: Ok, enough playing. Let's show that this table
                            is a sticky table and can scroll downwards with Course Title's position fixed. 
                          </ListItemText>
                        </ListItem>
                      </TableCell></TableRow>

                      <TableRow><TableCell>
                        <ListItem>
                          <ListItemAvatar><Avatar /></ListItemAvatar>
                          <ListItemText>Prof. Irwin KING: Hey Michael, you have already shown! BTW why last time you're late for
                            our gathering?
                          </ListItemText>
                        </ListItem>
                      </TableCell></TableRow>

                      <TableRow><TableCell>
                        <ListItem>
                          <ListItemAvatar><Avatar /></ListItemAvatar>
                          <ListItemText>Prof. Kwok Wai CHAN: How to you write division symbol? BTW how many times did I teach MATH2070?
                          </ListItemText>
                        </ListItem>
                      </TableCell></TableRow>

                    </TableBody>
                  </Table>
                </TableContainer>
                <Divider className={classes.divider} />
                <Button variant="contained" color="primary">Write a Thread</Button>
              </Paper>
            </Grid>
            {/* Thread Main Content & Comments */}
            <Grid item xs={6}>
              <Paper className={classes.paper}>
              <TableContainer className={classes.container}>
                  <Table aria-label="sticky table">
                    {/* The header of the table shows the Main Content of the Threads */}
                    <TableHead>
                      <TableRow>
                        <TableCell>
                        <ListItem>
                          <ListItemAvatar><Avatar /></ListItemAvatar>
                          <ListItemText>This is username: And this is the Thread Title. </ListItemText>
                        </ListItem>
                        <ListItemText>
                          This is Thread Main Content. Comments are arranged in descending order of time. 
                          I just want an A grade on CSCI3100. TAs please give us full score for our projects. 
                          BTW CUHK can use this instead of Blackboard. 
                          I would only charge $2500 per month per 30 users! So cheap right?
                        </ListItemText>
                        </TableCell>
                      </TableRow>
                    </TableHead>

                    <TableRow><TableCell>
                        <ListItem>
                          <ListItemAvatar><Avatar /></ListItemAvatar>
                          <ListItemText>
                            Again this is the username: And this is the comment. The functionality of this table
                            is the same as the table on the left. In otherwords, it's scrollable. 
                          </ListItemText>
                        </ListItem>
                    </TableCell></TableRow>
                    
                    <TableRow><TableCell>
                        <ListItem>
                          <ListItemAvatar><Avatar /></ListItemAvatar>
                          <ListItemText>Prof. Kung Fu NG: Remeber the PUNCH-OUT set in MATH2050!
                          </ListItemText>
                        </ListItem>
                    </TableCell></TableRow>

                    <TableRow><TableCell>
                        <ListItem>
                          <ListItemAvatar><Avatar /></ListItemAvatar>
                          <ListItemText>
                            Prof. Chi Wai LEUNG: Remember that this theorem is 好鬼重要. 
                          </ListItemText>
                        </ListItem>
                    </TableCell></TableRow>

                    <TableRow><TableCell>
                        <ListItem>
                          <ListItemAvatar><Avatar /></ListItemAvatar>
                          <ListItemText>
                            Prof. Michael LYU: Should the header be sticky? i.e. position fixed
                          </ListItemText>
                        </ListItem>
                    </TableCell></TableRow>
                  </Table>
                </TableContainer>
                <Divider className={classes.divider} />
                <Button variant="contained" color="primary">Write a comment</Button>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
