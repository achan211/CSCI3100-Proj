import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { CssBaseline, IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CreateIcon from '@material-ui/icons/Create';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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

    dialogContent: {
        textAlign: 'center',
    },

    container: {
        minHeight: " calc(100vh - 64px )",
        maxHeight: " calc(100vh - 64px )",
      },

}));

export default function UserProfile() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.app}>
                <CssBaseline />
                <div className={classes.main}>
                    <h1>My Profile</h1>
                    <Divider className={classes.divider} />
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                Styling will be done...For now please just ignore this page....
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                Avatar
                            </Paper>
                        </Grid>
                        
                    </Grid>
                </div>
            </div>
        </React.Fragment>
    )
}
