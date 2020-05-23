import React, { useState, useEffect } from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';

import apiUrl from '../../../api';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    flexFlow: 1,
    maxWidth: '100%',
    alignItems: 'center',
    display: 'flex',
    '& > *': {
      margin: theme.spacing(10),
    },
  },
  large: {
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(4),
  },
  mainDiv: {
  },
  margin: {
    flexGrow: 1,
    marginLeft: 'auto',
  },
  paper: {
    height: 140,
    width: 100,
  },
}));

const HotCoffee = () => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const [checked, setChecked] = useState([]);
  const success = 'success';
  const handleToggle = (value) => () => {
    const newChecked = [...checked];
    if (value.length > 0) {
      newChecked.push(value);
      setChecked(newChecked);
      enqueueSnackbar(`${value} added!`, { success });
    } else {
      // alert('try again');
    }
  };
  const [coffee0, setCoffee0] = useState({});
  const [coffee1, setCoffee1] = useState({});
  const [coffee2, setCoffee2] = useState({});
  const [coffee3, setCoffee3] = useState({});
  const [coffee4, setCoffee4] = useState({});
  const [coffee5, setCoffee5] = useState({});
  const [coffee6, setCoffee6] = useState({});
  const [coffee7, setCoffee7] = useState({});
  const [coffee8, setCoffee8] = useState({});
  const [coffee9, setCoffee9] = useState({});

  const getHotcoffes = async () => {
    try {
      const response = await Axios.get(`${apiUrl}product`);
      if (response.status === 200) {
        setCoffee0(response.data[0]);
        setCoffee1(response.data[1]);
        setCoffee2(response.data[2]);
        setCoffee3(response.data[3]);
        setCoffee4(response.data[4]);
        setCoffee5(response.data[5]);
        setCoffee6(response.data[6]);
        setCoffee7(response.data[7]);
        setCoffee8(response.data[8]);
        setCoffee9(response.data[9]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHotcoffes();
  }, []);

  return (
    <Grid>
      <Grid
        container
        direction="row-reverse"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item>
          <Typography className={classes.title} variant="h4">Hot Coffees</Typography>
        </Grid>
      </Grid>
      <Typography variant="h5" display="block">
        Americanos
      </Typography>
      <Divider />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={10}
        className={classes.root}
      >
        <Grid item>
          <Tooltip
            onClick={handleToggle(coffee0.name)}
            title={` $ ${coffee0.price}`}
            interactive
          >
            <Avatar
              component={Link}
              src={coffee0.image}
              alt="Caffe Americano"
              className={classes.large}
              to={`/menu/${coffee0._id}`}
            />
          </Tooltip>
          <Typography
            align="center"
            display="block"
          >
            {coffee0.name}
          </Typography>
        </Grid>
        <Grid item>
          <Tooltip
            onClick={handleToggle(coffee1.name)}
            title={` $${coffee1.price}`}
            interactive
          >
            <Avatar
              className={classes.large}
              alt="Americano Blonde"
              src={coffee1.image}
              to={`/menu/${coffee9._id}`}
              component={Link}
            />
          </Tooltip>
          <Typography>{coffee1.name}</Typography>
        </Grid>
        <Grid item>
          <Tooltip onClick={handleToggle(coffee2.name)} title={` $ ${coffee2.price}`} interactive>
            <Avatar
              alt="Pike Roast"
              src={coffee2.image}
              className={classes.large}
              to={`/menu/${coffee2._id}`}
              component={Link}
            />
          </Tooltip>
          <Typography align="center">{coffee2.name}</Typography>
        </Grid>
      </Grid>
      <Typography variant="h5" display="block">
        Brewed Coffees
      </Typography>
      <Divider />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={10}
        className={classes.root}
      >
        <Grid item>
          <Tooltip onClick={handleToggle('Blonde Roast')} title={` $${coffee3.price}`} interactive>
            <Avatar
              alt="Blonde Roast"
              src={coffee3.image}
              className={classes.large}
              to={`/menu/${coffee3._id}`}
              component={Link}
            />
          </Tooltip>
          <Typography align="center">{coffee3.name}</Typography>
        </Grid>
        <Grid item>
          <Tooltip onClick={handleToggle(coffee4.name)} title={` $ ${coffee4.price}`} interactive>
            <Avatar
              className={classes.large}
              alt="Caffè Misto"
              src={coffee4.image}
              component={Link}
              to={`/menu/${coffee4._id}`}
            />
          </Tooltip>
          <Typography align="center">{coffee4.name}</Typography>
        </Grid>
        <Grid item>
          <Tooltip onClick={handleToggle(coffee5.name)} title={` $ ${coffee5.price}`} interactive>
            <Avatar
              className={classes.large}
              alt="Decaf Pike"
              src={coffee5.image}
              to={`/menu/${coffee5._id}`}
              component={Link}
            />
          </Tooltip>
          <Typography align="center" display="block">{coffee5.name}</Typography>
        </Grid>
      </Grid>
      <Typography variant="h5" display="block">
        Cappuccinos
      </Typography>
      <Divider />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={10}
        className={classes.root}
      >
        <Grid item>
          <Tooltip
            onClick={handleToggle(coffee6.name)}
            title={` $ ${coffee6.price}`}
            interactive
          >
            <Avatar
              alt="Cappuccino blond"
              src={coffee6.image}
              className={classes.large}
              to={`/menu/${coffee6._id}`}
              component={Link}
            />
          </Tooltip>
          <Typography align="center">{coffee6.name}</Typography>
        </Grid>
        <Grid item>
          <Tooltip onClick={handleToggle(coffee7.name)} title={` $ ${coffee7.price}`} interactive>
            <Avatar
              className={classes.large}
              alt="Cappuccino"
              src={coffee7.image}
              to={`/menu/${coffee7._id}`}
              component={Link}
            />
          </Tooltip>
          <Typography align="center">{coffee7.name}</Typography>
        </Grid>
      </Grid>
      <Typography variant="h5" display="block">
        Espresso Shots
      </Typography>
      <Divider />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={10}
        className={classes.root}
      >
        <Grid item>
          <Tooltip
            onClick={handleToggle(coffee8.name)}
            title={`$ ${coffee8.price}`}
            interactive
          >
            <Avatar
              alt="Espresso pana"
              src={coffee8.image}
              className={classes.large}
              to={`/menu/${coffee8._id}`}
              component={Link}
            />
          </Tooltip>
          <Typography align="center">{coffee8.name}</Typography>
        </Grid>
        <Grid item>
          <Tooltip onClick={handleToggle(coffee9.name)} title={`$ ${coffee9.price}`} interactive>
            <Avatar
              className={classes.large}
              alt="Expresso"
              src={coffee9.image}
              to={`/menu/${coffee9._id}`}
              component={Link}
            />
          </Tooltip>
          <Typography align="center">{coffee9.name}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <HotCoffee />
    </SnackbarProvider>
  );
}
