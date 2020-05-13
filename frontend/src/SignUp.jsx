import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar, Button, TextField, Link, Grid, Typography, Container,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Redirect } from 'react-router-dom';
import apiUrl from '../api';

const styles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(5),
    flexDirection: 'column',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '80%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = () => {
  const classes = styles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState('');

  const handleSubmission = async (e) => {
    e.preventDefault();
    if (email.length > 0 && password.length > 0) {
      await fetch(`${apiUrl}/auth/signup`, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.toLowerCase(),
          password,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`${res.status}: ${res.status}`);
          }
          setRedirect('/login');
        })
        .catch(console.log);
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
        <Typography component="h1" variant="h5">Sign-up</Typography>
        <form className={classes.form} onSubmit={(e) => handleSubmission(e)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField variant="outlined" required fullWidth name="email" label="Email Address" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" required fullWidth name="password" label="Password" type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" fullWidth variant="contained" color="primary">Sign Up</Button>
            </Grid>
            <Grid item xs={12}>
              <Link to="/login" href="/login" variant="body2">Already have an account? Sign in now</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
