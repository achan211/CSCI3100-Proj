import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper';
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
        padding: theme.spacing(1)
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
    const [Course, setCourse] = useState([])


    let code= localStorage.getItem('info');
    code = JSON.parse(code).course
    useEffect(()=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              'code' : code,
            })
          };
          fetch('http://localhost:5000/', requestOptions)
            .then(response => response.json())
            .then(response => {
              if(!response.error){
                  console.log(response)
                setCourse(response)
              }
              else
              setCourse('no course yet')
    
            });
    },[])

    let renderCourseCard = () => {
        return Course.map((item, index) => {
            return (
                <React.Fragment key={item.code}>
                    <Grid xs={1} ></Grid>
                    <Grid item xs={10}>
                        <Card className={classes.card}>
                            <Link className="link" to={`/${item.code}`}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {item.department}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                        </Card>
                    </Grid>
                    <Grid xs={1}></Grid>
                </React.Fragment>
            )
        })

    }

    let renderProfUpdate = () => {
        return Course.map((item, index) => {
            return (
                <React.Fragment key={item.code}>
                    <Grid xs={2}></Grid>
                    <Grid item xs={8}>
                        <Card className={classes.card}>
                            <Link className="link" to={`/${item.code}`}>
                                <CardActionArea >
                                    <CardContent >
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {item.updates}
                                            {/* note: updates is an array */}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>

                        </Card>
                    </Grid>
                    <Grid xs={2}></Grid>


                </React.Fragment>
            )
        })

    }

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>sadabdesdbdsbd</Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>item</Paper>
                </Grid>
            </React.Fragment>
        );
    }
    let loginnedHome = (
        // <React.Fragment>
        //     <CssBaseline />
        <div className={classes.root}>
            <Grid container >
                <Grid item xs={4} spacing={3} >
                    <Typography variant="h4" noWrap className={classes.title}>
                        My Courses
                        </Typography>
                    <Grid container spacing={3} >
                        {renderCourseCard()}
                    </Grid>
                </Grid>

                <Grid item xs={8} spacing={3} >
                    <Typography variant="h4" noWrap className={classes.title}>
                        Updates from My Courses
                        </Typography>
                    <Grid container xs={12} spacing={3} >
                        {renderProfUpdate()}
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
            {localStorage.getItem('token') ? loginnedHome : RedirectToLogin()}
        </React.Fragment>
    )
}
