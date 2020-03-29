import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';
import Header from "./HomeHeader";
import Footer from './ForumFooter';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
export default function Home(){
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container>
            <Header title="Welcome to CUHK Live Classroom" sections={sections} />
            <Grid container spacing={4} justify="center">
                {/* Card One */}
                <Grid item>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia className={classes.media} image="url(https://source.unsplash.com/random)" title="Contemplative Reptile" />
                            <CardContent>
                                {/* Course Title */}
                                <Typography gutterBottom variant="h5" component="h2">
                                COSE1234 - This is Course Title
                                </Typography>
                                {/* Course Description */}
                                <Typography variant="body2" color="textSecondary" component="p">
                                This is the course description of the course. I really wish to get an A in CSCI3100 so please give us an A. 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        {/* Links for the Course */}
                        <CardActions>
                        <Button size="small" color="primary">Forum</Button>
                        <Button size="small" color="primary">Chatroom</Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/* Card Two */}
                <Grid item>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia className={classes.media} image="url(https://source.unsplash.com/random)" title="Contemplative Reptile" />
                            <CardContent>
                                {/* Course Title */}
                                <Typography gutterBottom variant="h5" component="h2">
                                CSCI3100 - Software Engineering
                                </Typography>
                                {/* Course Description */}
                                <Typography variant="body2" color="textSecondary" component="p">
                                This course will focus on state-of-the-art techniques in software design, development, measurement and evaluation.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        {/* Links for the Course */}
                        <CardActions>
                        <Button size="small" color="primary" href="/ClassAForum">Forum</Button>
                        <Button size="small" color="primary">Chatroom</Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/* Card Three */}
                <Grid item>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia className={classes.media} image="url(https://source.unsplash.com/random)" title="Contemplative Reptile" />
                            <CardContent>
                                {/* Course Title */}
                                <Typography gutterBottom variant="h5" component="h2">
                                MATH3330 - Big Data Computing
                                </Typography>
                                {/* Course Description */}
                                <Typography variant="body2" color="textSecondary" component="p">
                                This course provides students with practical experiences in using mathematical techniques for big data computing. 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        {/* Links for the Course */}
                        <CardActions>
                        <Button size="small" color="primary" href="/ClassAForum">Forum</Button>
                        <Button size="small" color="primary">Chatroom</Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/* Card Four */}
                <Grid item>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia className={classes.media} image="url(https://source.unsplash.com/random)" title="Contemplative Reptile" />
                            <CardContent>
                                {/* Course Title */}
                                <Typography gutterBottom variant="h5" component="h2">
                                MATH3290 - Mathematical Modelling
                                </Typography>
                                {/* Course Description */}
                                <Typography variant="body2" color="textSecondary" component="p">
                                This course introduces the concept of mathematical modeling. 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        {/* Links for the Course */}
                        <CardActions>
                        <Button size="small" color="primary" href="/ClassAForum">Forum</Button>
                        <Button size="small" color="primary">Chatroom</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            </Container>
            <Footer />
        </React.Fragment>
    )
}