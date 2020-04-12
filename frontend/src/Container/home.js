import React, {useEffect,useContext, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import axios from "axios"
import { UserCourseList } from "../test"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },

    mainGrid: {
        marginTop: theme.spacing(3),

    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title:{
        color: '#B9B9B9',
        paddingTop: '15px',
        paddingBottom: '15px'
    },

    media: {
        height: 140,
    },

    card: {
        padding: theme.spacing(1),
        margin: theme.spacing(1),
    },
    Button: {
        margin: theme.spacing(1),
        padding: theme.spacing(2),
    },
    app: {
        display: 'flex',
    },
    course: {
        flexGrow: 1
    },
    profUpdate: {
        flexGrow: 1
    }
}));

// This is the homepage for user that have log into their accounts
export default function Home(props) {
    const classes = useStyles();
    const [Course, setCourse] = useState()
    const { courselist, courselistDispatch } = useContext(UserCourseList);

    // useEffect(()=>{

    //             axios.post('http://localhost:5000/', {}, {withCredentials: true}).then(response => response.data).then((response)=>{
                  
    //               console.log(response)
    //               if(response.redirectURL){
    //               //back to login
    //                 window.location.href = 'http://localhost:3000' + response.redirectURL
    //               }
    //               else{
    //                 setCourse(response)
    //               }
    //             })
        
    // },[])

    let renderCourseCard = () => {
        return courselist.map((item, index) => {
            return (
                <React.Fragment key={item.code}>
                    <Grid item md={4} xs={1} ></Grid>
                    <Grid item md={4} xs={10}>
                        <Card className={classes.card}>
                            <Link className="link" to={`/${item.code}`}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                        {item.code} {item.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {item.department}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                        </Card>
                    </Grid>
                    <Grid item md={4} xs={1} ></Grid>
                </React.Fragment>
            )
        })
    }

    let loginnedHome = (
        // <React.Fragment>
        //     <CssBaseline />
        <div className={classes.root}>
            <Grid container >
                <Grid item xs={12} >
                    <Typography variant="h4" noWrap className={classes.title}>
                        My Courses
                        </Typography>
                    <Grid container  >
                        {courselist ? Array.isArray(courselist) ? renderCourseCard() :<div>no course yet!</div>  : <div>loading...</div>}
                    </Grid>
                </Grid>
            </Grid>
        </div>
        // </React.Fragment>
    )
    let RedirectToLogin = () => {
        alert("You have not yet login!");
        const { history } = props;
        history.push('/login');
    }
    return (
        <React.Fragment>
            {loginnedHome }
        </React.Fragment>
    )
}
