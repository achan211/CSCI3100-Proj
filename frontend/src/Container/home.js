import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Header from '../Component/Header'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
    root: {
        width: 800,
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

    card: {
        padding: theme.spacing(2),
        margin: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.primary,
        fontSize: 16,
    },

    Button: {
        margin: theme.spacing(1),
        padding: theme.spacing(2),
    },
    app: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
      },

    main: {
        flex: 1,
        padding: theme.spacing(6, 4),
    },

    divider: {
        marginBottom: 10,
        marginTop: 8,
    }, 
}));

// This is the homepage for user that have log into their accounts
export default function Home(props) {
    const classes = useStyles();
    console.log(localStorage.getItem('token'))

    let tmpCoursedata = [
        {
            courseid: "CSCI3100",
            courseTitle: "CSCI3100 This is Course Title",
            courseDesc: "This is the course description of the course. I really wish to get an A in CSCI3100 so please give us an A.",
        },
        {
            courseid: "CSCI3130",
            courseTitle: "CSCI3130 automataion",
            courseDesc: "gs is the course description of the course. I really wish to get an A in CSCI3100 so please give us an"
        },
        {
            courseid: "CSCI3150",
            courseTitle: "CSCI3150 OS",
            courseDesc: "ves is the course description of the course. I really wish to get an A in CSCI3100 so please give us anrse"
        },
        {
            courseid: "UGEA2100",
            courseTitle: "UGEA 2100 GE course",
            courseDesc: "OKs is the course description of the course. I really wish to get an A in CSCI3100 so please give us anA"
        },
    ]
    
    let renderCourseCard = () => {
        return tmpCoursedata.map((item,index)=>{
            return (
                <Grid item>
                    <Card className={classes.root}>
                        <Link className="link" to={`/${item.courseid}`}>
                            <CardActionArea>
                                <CardContent className={classes.card}>
                                    {/* Course Title */}
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {item.courseTitle}
                                    </Typography>
                                    {/* Course Description */}
                                    <Typography variant="body2" component="p">
                                        {item.courseDesc}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Link>
                    </Card>
                </Grid>
            )
        })
    }

    let loginnedHome = (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.app}>
                <Header />
                <main className={classes.main}>
                <Typography variant="h3" noWrap>
                    My Courses
                </Typography>
                <Divider className={classes.divider} />
                    <Grid container spacing={3} direction="column" alignItems="center" justify="center">
                        {renderCourseCard()}
                    </Grid>
                </main>
            </div>
        </React.Fragment>
    )
    let RedirectToLogin = () => {
        alert("You have not yet login!");
        const { history } = props;
        history.push('/login');
    }
    return (
        <React.Fragment>
            {localStorage.getItem('token') ? loginnedHome : RedirectToLogin()}
        </React.Fragment>
    )
}
