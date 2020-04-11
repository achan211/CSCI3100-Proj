import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { CssBaseline, IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const useStyles = makeStyles(theme => ({
    root: {
        width: 900,
    },

    title: {
    color: '#B9B9B9',
    paddingTop: '15px',
    paddingBottom: '15px'
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
        marginTop: theme.spacing(4),
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

    avatar: {
        marginLeft: 'auto',
        height: 100,
        width: 90,
        flexGrow: 0
    },

}));

export default function UserProfile() {
    const classes = useStyles();

    const [users, setValues] = useState({
        firstName: 'Alvin',
        lastName: 'Chan',
        email: '1155108897@link.cuhk.edu.hk',
        phone: '+852 60588992',
        major: 'Mathematics & Mathematics Education (Double Major)',
        minor: 'Computer Science'
      });

      const handleChange = event => {
        setValues({
          ...users,
          [event.target.name]: event.target.value
        });
      };


    let renderProfileInfo = () => {
        return (
            <React.Fragment>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <AccountCircleIcon fontSize="large" color="body2" />
                        <Typography variant="h5" noWrap>My Profile</Typography>
                        <Divider className={classes.divider} />
                        <div className={classes.paperContent}>
                            <Grid container spacing={3}>
                                {/* First Name*/}
                                <Grid item md={6} xs={12}>
                                <TextField fullWidth helperText="Please specify the first name" label="First name" margin="dense"
                                name="firstName" required onChange={handleChange} value={users.firstName} variant="outlined" />
                                </Grid>
                                {/* Last Name */}
                                <Grid item md={6} xs={12}>
                                <TextField fullWidth label="Last name" margin="dense"
                                name="lastName" required onChange={handleChange} value={users.lastName} variant="outlined" />
                                </Grid>
                                {/* Email Address */}
                                <Grid item md={6} xs={12}>
                                <TextField fullWidth label="Email Address" margin="dense"
                                name="email" required onChange={handleChange} value={users.email} variant="outlined" />
                                </Grid>
                                {/* Phone Number */}
                                <Grid item md={6} xs={12}>
                                <TextField fullWidth label="Phone" margin="dense"
                                name="phone" required onChange={handleChange} value={users.phone} variant="outlined" />
                                </Grid>
                                {/* Major */}
                                <Grid item md={12} xs={12}>
                                <TextField fullWidth label="Major" margin="dense"
                                name="major" required onChange={handleChange} value={users.major} variant="outlined" />
                                </Grid>
                                {/* Minor */}
                                <Grid item md={12} xs={12}>
                                <TextField fullWidth label="Minor(s)" margin="dense"
                                name="minor" onChange={handleChange} value={users.minor} variant="outlined" />
                                </Grid>
                            </Grid>
                            <Divider className={classes.divider} />
                        </div>
                        <Button color="primary" variant="contained">Save Details</Button>
                    </Paper>
                </Grid>
            </React.Fragment>
        )
    }

    let renderProfileAvatar = () => {
        return (
            <React.Fragment>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography variant="h5" noWrap>{users.firstName} {users.lastName}</Typography>
                        <Divider className={classes.divider} />
                        <div className={classes.paperContent}>
                        I don't know arrrr...
                        </div>
                    </Paper>
                </Grid>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <div className={classes.app}>
                <CssBaseline />
                <div className={classes.main}>
                    <Grid container>
                        {renderProfileInfo()}
                        {renderProfileAvatar()}
                    </Grid>
                </div>
            </div>
        </React.Fragment>
    )
}
