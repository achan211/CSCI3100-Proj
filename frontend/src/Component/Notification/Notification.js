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
      <div className={classes.messageContainer}>
        <Typography
          className={classnames({
            [classes.containedTypography]: variant === "contained",
          })}
          variant={props.typographyVariant}
        >
          {props.text}
        </Typography>
      </div>
    </div>
  );
}

