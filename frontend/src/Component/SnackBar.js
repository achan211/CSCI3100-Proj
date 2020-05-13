// PROGRAM – Program to render page content
// PROGRAMMER: So, Chi Fung
// CALLING SEQUENCE: return the JSX element, then call useffect. 
// VERSION 1: written 4-2-2020
// REVISION 1.1: written 4-5-2020
// PURPOSE: render page content
// DATA STRUCTURES: Json Data Type storing course details

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import React, { useState } from 'react';

let SnackBar = (props) =>{

    return(
        <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        key={`top,$left`}
        open={props.Open}
        onClose={props.handleClose}>
        <SnackbarContent style={{
          backgroundColor: props.success ? '#84DE02' : '#FFBF00'  ,
        }}
          message={<span id="client-snackbar">{props.AlertMessage}!</span>}
        />
      </Snackbar>
    )
}
export default SnackBar