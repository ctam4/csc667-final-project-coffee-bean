import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';

import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar, Button, TextField, Link, Grid, Typography, Container,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Redirect } from 'react-router-dom';

import { setIsLoggedIn } from 'actions/index.js';
import apiUrl from '../api';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    if (email !== '' && password !== '') {
      await fetch(`${apiUrl}/auth/authenticate`, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: Buffer.from(
            `${email.toLowerCase()}:${password}`,
          ).toString('base64'),
        }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`${res.status}: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          setCookie('token', data.params.token);
          dispatch(setIsLoggedIn(true));
          setRedirect('/');
        })
        .catch(alert);
    }
  };

  if (redirect) {
    return <Redirect to={redirect} />;
  }
  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log-in
        </Typography>
        <form className={classes.form} onSubmit={(e) => handleSubmission(e)}>
          <Grid container spacing={2}>
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
              <Link to="/signup" href="/signup" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default LogIn;
