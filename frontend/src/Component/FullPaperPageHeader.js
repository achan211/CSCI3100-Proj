// PROGRAM – Program to render page content
// PROGRAMMER: So, Chi Fung
// CALLING SEQUENCE: return the JSX element, then call useffect. 
// VERSION 1: written 4-2-2020
// REVISION 1.1: written 4-5-2020
// PURPOSE: render page content
// DATA STRUCTURES: Json Data Type storing course details
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

let FullPaperPageHeader = (props) => {
    let width = props.width?props.width:'70%'
    let minheight = props.minheight ? props.minheight :  'calc(100vh - 172px)'
    const useStyles = makeStyles(theme => ({
        title: {
            color: '#B9B9B9',
            paddingTop: '15px',
            paddingBottom: '15px'
        },
        paper: {
            padding: theme.spacing(2),
            margin: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.primary,
            minHeight: minheight,
        },
    
        paperContent: {
            textAlign: 'left',
            justify: 'justified',
            
            [theme.breakpoints.up('md')]: {
                width: width ,
              },
            margin: '0 auto'
        },
        message: {
            paddingBottom: '25px',
        }
    
    
    }));
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container>

                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <div className={classes.paperContent}>
                            <Typography variant="h4"  className={classes.title}>
                                {props.title}
                  </Typography>
                            <Typography variant="body1" gutterBottom>
                                {props.body1}
                  </Typography>
                            <Typography variant="body1" gutterBottom>
                            {props.body2}

                                
                  </Typography>
                            {props.children}
                        </div>
                    </Paper>
                    {/* </div> */}
                </Grid>

            </Grid>
        </React.Fragment>
    )
}

export default FullPaperPageHeader
