
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
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

  

}));
let ErrorPage = ()=>{
    const classes = useStyles();
    return(
        <React.Fragment>
                <div className={classes.app}>
                    <div className={classes.main}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Paper  variant="elevation">
                                    <Typography variant="h4" align="center" justify="center" noWrap>
                                        Opps! <br />
                                You didn't register this course. Please check your URL. <br />
                                Or click the button below to redirect you back to Home Page.
                                </Typography>
                                    <Button variant="contained" color="primary">Home Page</Button>
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </React.Fragment>
    )
}
export default ErrorPage