import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    fontSize: '50px',
    width: 'auto',
    height: 'auto',
    color: theme.palette.getContrastText(green[100]),
    backgroundColor: green[300],
  },
}));

export default function LetterAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.purple}>CB</Avatar>
    </div>
  );
}
