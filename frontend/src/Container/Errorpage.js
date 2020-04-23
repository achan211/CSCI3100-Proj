import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    app: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },

    main: {
        flex: 1,
    },

    div: {
        marginTop: theme.spacing(24),
    }

}));
let ErrorPage = ()=>{
    const classes = useStyles();
    return(
        <React.Fragment>
                <div className={classes.app}>
                    <div className={classes.main}>
                        <Grid container>
                            <Grid item xs={12}>
                            <div className={classes.div}>
                            <Typography variant="h4" align="center" justify="center" noWrap gutterBottom>
                                        Opps! <br />
                                You didn't register this course. Please check your URL. <br />
                                Or click the button below to redirect you back to Home Page.
                                </Typography>
                                    <Button variant="contained" color="primary">Home Page</Button>
                            </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </React.Fragment>
    )
}
export default ErrorPage