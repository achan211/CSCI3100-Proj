import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';
import Header from "../Component/HomeHeader";
import Footer from '../Component/ForumFooter';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
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
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },

    Button: {
        margin: theme.spacing(1),
        padding: theme.spacing(2),
    },
}));

const sections = [
    { title: 'Forum', url: 'ForumHome' },
    { title: 'Chatroom', url: '#' },
    { title: 'Quiz', url: '#' },
];

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
                                <CardMedia className={classes.media} image="url(https://source.unsplash.com/random)" title="Contemplative Reptile" />
                                <CardContent>
                                    {/* Course Title */}
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {item.courseTitle}
                        </Typography>
                                    {/* Course Description */}
                                    <Typography variant="body2" color="textSecondary" component="p">
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
                <Container>
                    <Header title="Welcome to CUHK Live Classroom" sections={sections} />
                    <Grid container spacing={4} justify="center">
                    {renderCourseCard()}
                </Grid>
            </Container>
            <Footer />
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