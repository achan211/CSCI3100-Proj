// PROGRAM – Program to render page content
// PROGRAMMER: So, Chi Fung
// CALLING SEQUENCE: return the JSX element, then call useffect. 
// VERSION 1: written 4-2-2020
// REVISION 1.1: written 4-5-2020
// PURPOSE: render page content
// DATA STRUCTURES: Json Data Type storing course details

import React from "react";
import ForumIcon from '@material-ui/icons/Forum';
import { useTheme } from "@material-ui/styles";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import { Typography } from "../Wrappers";


export default function Notification({ variant, ...props }) {
  var classes = useStyles();
  var theme = useTheme();


  return (
    <div
      className={classnames(classes.notificationContainer, {
      })}
    >
      <div
        className={classnames(classes.notificationIconContainer, {
          [classes.notificationIconContainerContained]: variant === "contained",
          [classes.notificationIconContainerRounded]: variant === "rounded",
        })}
        style={{
          backgroundColor:
            variant === "rounded" 
        }}
      >
        <ForumIcon />
      </div>
      <div >
        <Typography
          weight="medium" gutterBottom
          className={classes.text}
        >
          {props.text}
        
        </Typography>
        <Typography
          className={classes.text}

          color="text" colorBrightness="secondary"
        >
          {props.content}
        </Typography>
      </div>
    </div>
  );
}

