import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ClassIcon from '@material-ui/icons/Class';

export const courseList = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <ClassIcon />
      </ListItemIcon>
      <ListItemText primary="CSCI3100" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ClassIcon />
      </ListItemIcon>
      <ListItemText primary="CSCI3130" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ClassIcon/>
      </ListItemIcon>
      <ListItemText primary="CSCI3120" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ClassIcon />
      </ListItemIcon>
      <ListItemText primary="CSCI3110" />
    </ListItem>
  </div>
);

