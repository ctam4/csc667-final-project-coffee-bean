import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar, Button, TextField, Grid, Typography, Container, Paper,
  FormControl, MenuItem, Select, InputLabel,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Redirect, Link } from 'react-router-dom';

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

const SignUp = () => {
  const classes = useStyles();
  const [cookies, setCookie] = useCookies(['token']);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [redirect, setRedirect] = useState('');

  const handleSubmission = async (e) => {
    e.preventDefault();
    if (email.length > 0 && password.length > 0) {
      await fetch(`${apiUrl}auth/signup`, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.toLowerCase(),
          password,
          role,
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
    <>
      <Container component="main" maxWidth="sm">
        <Paper className={classes.paper} elevation={0}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">Sign-up</Typography>
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
                <FormControl variant="outlined" required fullWidth>
                  <InputLabel id="role-label">Role</InputLabel>
                  <Select
                    labelId="role-label"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    label="Role"
                  >
                    <MenuItem value="" disabled>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="buyer">Buyer</MenuItem>
                    <MenuItem value="seller">Seller</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" fullWidth variant="contained" color="primary">Sign Up</Button>
              </Grid>
              <Grid item xs={12}>
                <Link to="/login" variant="body2">Already have an account? Log in now</Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default SignUp;
