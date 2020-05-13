// PROGRAM – Program to render page content
// PROGRAMMER: So, Chi Fung
// CALLING SEQUENCE: return the JSX element, then call useffect. 
// VERSION 1: written 4-2-2020
// REVISION 1.1: written 4-5-2020
// PURPOSE: render page content
// DATA STRUCTURES: Json Data Type storing course details
import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { ListItem, ListItemAvatar, ListItemText, Menu, MenuItem } from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import CreateIcon from '@material-ui/icons/Create';
import Tooltip from '@material-ui/core/Tooltip';
import Notification from "../Component/Notification/Notification";
import CommentModal from "../Component/CommentModal"
import NewTopicModal from "../Component/NewTopicModal"
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import axios from "axios"
import { UserType, UserCourseList } from "../test"

const useStyles = makeStyles(theme => ({
  headerMenu: {
    marginTop: theme.spacing(7),
  },

  headerMenuItem: {
    "&:hover, &:focus": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },
  },
  headerMenuButton: {
    marginLeft: theme.spacing(2),
    padding: theme.spacing(0.5),
  },

  headerIcon: {
    fontSize: 28,
    color: "rgba(0, 0, 0, 1)",
  },
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
    minHeight: " calc(100vh - 156px )",
    maxHeight: " calc(100vh - 156px )",

  },

  tableHead: {
    fontSize: 18,
  },
  forumTableContainer: {
    borderRight: '1px solid #e0e0e0',
  },

  AddButton: {
    marginLeft: 'auto',
    marginRight: -12,
  },
  th: {
    padding: 0
  }

}));


export default function ForumHome(props) {
  const classes = useStyles();
  let [Opent, setOpent] = React.useState(false);
  var [notificationsMenu, setNotificationsMenu] = useState(null);
  let [Course, setCourse] = useState(null)
  let [ErrorValue, setErrorValue] = useState(null)
  let [CurrentFourmTopicId, setCurrentFourmTopicId] = useState(null)
  let [Comments, setComments] = useState(null)
  let [CurrentCourse, setCurrentCourse] = useState(null)
  const { courselist, courselistDispatch } = useContext(UserCourseList);

  const handleClickOpenComment = () => {
    setOpent(true);
  };

  const handleCloseComment = () => {
    setOpent(false);
  };

  let info = localStorage.getItem('info');
  // console.log(info)

  // get forum topic from server
  useEffect(() => {
    if (checkIfEnrolled()) {
      axios.post(`http://localhost:5000/forum`, {
        'code': CurrentCourse ? CurrentCourse : props.match.params.id ? props.match.params.id : courselist[0].code,
      }, { withCredentials: true }).then(response => response.data).then((response) => {
        if (response.redirectURL) {
          //back to login
          window.location.href = 'http://localhost:3000' + response.redirectURL
        }
        //first time
        else if (!CurrentCourse)
          setCurrentCourse(props.match.params.id ? props.match.params.id : courselist[0].code)
        else if (!response.error) {
          console.log(response)
          setCourse(response.docs.topic.reverse())
          setCurrentFourmTopicId(null)
          setComments(null)
          setErrorValue(null)
        } else {
          setCourse(null)
          setErrorValue('no course yet')
        }

      })
    }
  }, [courselist, CurrentCourse])

  //get comment from server
  useEffect(() => {
    if (CurrentFourmTopicId) {
      console.log(Comments)
      console.log(CurrentCourse)

      axios.post(`http://localhost:5000/forumComments`, {
        'code': CurrentCourse,
        'id': CurrentFourmTopicId._id
      }, { withCredentials: true }).then(response => response.data).then((response) => {
        if (response.redirectURL) {
          //back to login
          window.location.href = 'http://localhost:3000' + response.redirectURL
        }
        else if (!response.error) {
          console.log(response)
          setComments(response.docs)
        } else {
          setComments(null)
        }
      })
      
    }

  }, [CurrentFourmTopicId])

  //post a new topic to server
  let handleAddTopic = (Topic, Context) => {

    axios.post(`http://localhost:5000/forum/addTopic`, {
      'code': CurrentCourse,
      'topic': Topic,
      'context': Context,
    }, { withCredentials: true }).then(response => response.data).then((response) => {
      if (response.redirectURL) {
        //back to login
        window.location.href = 'http://localhost:3000' + response.redirectURL
      }
      else if (!response.error) {
        console.log(response)
        setCurrentFourmTopicId(response.docs)
      } else {
        console.log(response)
      }
    })

  }

  let checkIfEnrolled = () => {
    let filtered = Array.isArray(courselist) && courselist.length > 0 && courselist.filter(i => {
      return i.code === props.match.params.id
    })
    if (filtered.length > 0) {
      return true
    } else if (props.match.params.id === undefined && courselist.length > 0 && Array.isArray(courselist)) {
      return true
    }
    else {
      return false

    }
  }


  //add a new comment to server
  let handleAddComment = (value) => {
    if (value) {
      handleCloseComment()

      axios.post(`http://localhost:5000/forumComments/addComment`, {
        'code': CurrentCourse,
        'id': CurrentFourmTopicId._id,
        'text': value,
        'lauzhu': CurrentFourmTopicId.lauzhu
      }, { withCredentials: true }).then(response => response.data).then((response) => {
        if (response.redirectURL) {
          //back to login
          window.location.href = 'http://localhost:3000' + response.redirectURL
        }
        else if (!response.error) {
          console.log(response)
          setComments(response)
        } else {
          console.log(response)
        }
      })

    } else
      alert("must fill in !")
  }

  // Render the Topics of the threads of a Class Forum
  let renderForumTopic = () => {
    if (ErrorValue === null && Course) {
      return (
        Course.map(item => {
          return (
            <TableRow key={item._id}>
              <TableCell>

                <ListItem onClick={() => setCurrentFourmTopicId(item)}>
                  <ListItemAvatar>
                    <Avatar />
                  </ListItemAvatar>
                  <ListItemText>{item.topic}</ListItemText>
                </ListItem>
                {/* </Link> */}
              </TableCell>
            </TableRow>
          )
        })

      )
    }
  }

  // Render the comments of a particular threads
  let renderForumComments = () => {
    return (
      <React.Fragment>
        <TableHead>
          <TableRow>
            <TableCell className={classes.th}>
              <ListItem>
                <ListItemAvatar><Avatar /></ListItemAvatar>
                {CurrentFourmTopicId ?
                  <React.Fragment>
                    <ListItemText>{CurrentFourmTopicId.topic}</ListItemText>
                    <Tooltip title="Write a Comment" placement="bottom">
                      <IconButton className={classes.AddButton} onClick={handleClickOpenComment}><CreateIcon /></IconButton>
                    </Tooltip>
                  </React.Fragment>
                  : <ListItemText>Select A topic To View Comment~ </ListItemText>
                }
              </ListItem>
              {/* Dialogue for Comments */}
              {CurrentFourmTopicId && <CommentModal
                handleCloseComment={handleCloseComment}
                Opent={Opent}
                handleAddComment={handleAddComment}
              />}


            </TableCell>
          </TableRow>
        </TableHead>
        {CurrentFourmTopicId && <TableBody>
          <React.Fragment>
            <TableRow><TableCell>
              <ListItemText>
                {CurrentFourmTopicId.context}
              </ListItemText>
            </TableCell></TableRow>

            {Array.isArray(Comments) ? Comments.map(item => {
              return (
                <TableRow key={item.date}>
                  <TableCell>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar />
                      </ListItemAvatar>
                      <ListItemText>{item.text}</ListItemText>
                    </ListItem>
                  </TableCell>
                </TableRow>
              )
            }) : <TableRow >
                <TableCell>
                  <ListItem>
                    <ListItemText style={{ 'textAlign': 'center' }}>No Comment Yet~</ListItemText>
                  </ListItem>
                </TableCell>
              </TableRow>}
          </React.Fragment>
        </TableBody>}

      </React.Fragment>
    )
  }


  let renderForum = () => {
    return (
      <React.Fragment>
        <div className={classes.app}>
          <CssBaseline />
          <div className={classes.main}>
            <Paper className={classes.paper}>
              <Grid container>
                {/* Table for Forum Threads */}
                <Grid item md={4} xs={12} className={classes.forumTableContainer}>
                  {/* <Paper className={classes.paper}> */}
                  <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                      {/* The header of the table shows the course name of that forum. */}
                      <TableHead>
                        <TableRow>
                          <TableCell className={classes.th}>
                            <ListItem>
                              <IconButton
                                color="inherit"
                                aria-haspopup="true"
                                aria-controls="mail-menu"
                                onClick={e => {
                                  setNotificationsMenu(e.currentTarget);
                                }}
                                className={classes.headerMenuButton}
                              >
                                <FormatListBulletedIcon classes={{ root: classes.headerIcon }} />
                              </IconButton>
                              <Menu
                                id="notifications-menu"
                                open={Boolean(notificationsMenu)}
                                anchorEl={notificationsMenu}
                                onClose={() => setNotificationsMenu(null)}
                                className={classes.headerMenu}
                                disableAutoFocusItem
                              >
                                {courselist && courselist.map(item => (
                                  <MenuItem
                                    key={item.code}
                                    onClick={() => {
                                      setCurrentCourse(item.code)
                                      setNotificationsMenu(null)
                                    }}
                                    className={classes.headerMenuItem}
                                  >
                                    <Notification text={item.code} typographyVariant="inherit" />
                                  </MenuItem>
                                ))}
                              </Menu>
                              <ListItemText align="center" className={classes.tableHead}>{CurrentCourse}</ListItemText>

                              <NewTopicModal
                                handleAddTopic={handleAddTopic}
                              />
                            </ListItem>

                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {/* Threads title */}
                        {renderForumTopic()}

                      </TableBody>
                    </Table>
                  </TableContainer>
                  {/* </Paper> */}
                </Grid>

                {/* Thread Main Content & Comments */}
                <Grid item md={8} xs={12}>
                  <TableContainer className={`${classes.container} ${classes.commentConatiner}`}>
                    <Table stickyHeader aria-label="sticky table">
                      {renderForumComments()}

                    </Table>
                  </TableContainer>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </div>

      </React.Fragment>
    )

  }
  let renderErrorMessage = () => {
    return (
      <div>
        Not yet enrolled this course!
      </div>
    )
  }
  return (
    <React.Fragment>
      {courselist.length > 0 ? checkIfEnrolled() ? renderForum() : renderErrorMessage() : <div>loading...</div>
      }
    </React.Fragment>
  );
}
