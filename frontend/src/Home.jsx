import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Container, Grid } from '@material-ui/core';

import MainPic1 from './components/home/Item1';
import MainPic2 from './components/home/Item2';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container component="main" maxWidth="lg">
        <Paper className={classes.paper} elevation={0}>
          <Grid
            container
            spacing={2}
            direction="row"
            justify="center"
          >
            <Grid item xs>
              <MainPic1 />
            </Grid>
            <Grid item xs>
              <MainPic2 />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
