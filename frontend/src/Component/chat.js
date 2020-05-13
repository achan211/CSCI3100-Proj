// PROGRAM – Program to render page content
// PROGRAMMER: So, Chi Fung
// CALLING SEQUENCE: return the JSX element, then call useffect. 
// VERSION 1: written 4-2-2020
// REVISION 1.1: written 4-5-2020
// PURPOSE: render page content
// DATA STRUCTURES: Json Data Type storing course details
import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

export default function dialog(prop) {
  let name = prop.name;
  let message = prop.message;


  const Style = makeStyles({
    messageFromOther: {
      paddingLeft: '25px',
      textAlign: 'left',
  },
    messageFromMe: {
      paddingRight: '25px',
      textAlign: 'right',
  },
    messageFromOtherspan: {
      display:'inline-block',
      borderTopLeftRadius: '21px',
        borderTopRightRadius: '21px',
        borderBottomLeftRadius: '21px',
        borderBottomRightRadius: '21px',
        borderWidth: '1px',
        paddingTop: '0px',
        paddingRight: '15px',
        color: 'black',
        backgroundColor: 'white',
    },
    messageFromMespan: {
        display:'inline-block',
        borderTopLeftRadius: '21px',
        borderTopRightRadius: '21px',
        borderBottomLeftRadius: '21px',
        borderBottomRightRadius: '21px',
        borderWidth: '1px',
        paddingTop: '0px',
        paddingRight: '15px',
        color: 'white',
        backgroundColor: 'blue',
    },
});

const classes = Style()

  return (<>
    
    <div className={name==="Alice"? classes.messageFromMe : classes.messageFromOther}>
        <span className={name==="Alice"? classes.messageFromMespan : classes.messageFromOtherspan}>
          {message}
        </span>
    </div>
        </>    

 
  );
}
