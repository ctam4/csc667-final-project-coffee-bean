import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import MainPic1 from './components/home/Item1';
import MainPic2 from './components/home/Item2';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: ' 100%',
  },
  divider: {
    backgroundColor: 'blue',
    border: '50px',
    left: 0,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box
        display="flex"
        flexWrap="nowrap"
        p={1}
        m={1}
        bgcolor="background.paper"
        width="auto"
      >
        <Box width="50%" p={1} bgcolor="grey.300">
          <MainPic1 />
        </Box>
        <Box width="50%" p={1} bgcolor="grey.300">
          <MainPic2 />
        </Box>
      </Box>
    </div>
  );
}
