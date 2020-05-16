import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';

import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar, Button, TextField, Grid, Typography, Container, Paper,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Redirect, Link } from 'react-router-dom';

import { setIsLoggedIn } from './actions/index';
import apiUrl from '../api';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(3),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LogIn = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [cookies, setCookie] = useCookies(['token']);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState('');

  const handleSubmission = async (e) => {
    e.preventDefault();
    if (email.length > 0 && password.length > 0) {
      const token = Buffer.from(
        `${email.toLowerCase()}:${password}`,
      ).toString('base64');
      await fetch(`${apiUrl}auth/login`, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            if (res.status !== 406) {
              throw new Error(`${res.status}: ${res.status}`);
            } else {
              alert('Incorrect username / password.');
            }
          } else {
            setCookie('token', token);
            dispatch(setIsLoggedIn(true));
            setRedirect('/');
          }
        })
        .catch(console.log);
    }
  };

  if (redirect) {
    return <Redirect to={redirect} />;
  }
  return (
    <React.Fragment>
      <Container component="main" maxWidth="sm">
        <Paper className={classes.paper} elevation={0}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">Log-in</Typography>
          <form className={classes.form} onSubmit={(e) => handleSubmission(e)}>
            <Grid
              container
              spacing={2}
              direction="row"
              justify="center"
            >
              <Grid item xs={12}>
                <TextField variant="outlined" required fullWidth name="email" label="Email Address" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" required fullWidth name="password" label="Password" type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" fullWidth variant="contained" color="primary">Log In</Button>
              </Grid>
              <Grid item xs={12}>
                <Link to="/signup" variant="body2">Don&apos;t have an account? Sign up now</Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default LogIn;
