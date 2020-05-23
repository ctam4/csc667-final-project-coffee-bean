import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SnackbarProvider, useSnackbar } from 'notistack';
import Axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import {
  Grid, Container, Paper, Typography, Fab, Avatar, Chip,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FaceIcon from '@material-ui/icons/Face';
import Viewers from './components/Viewers';
import { addItem } from './actions/index';
import apiUrl from '../api';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    padding: theme.spacing(3),
  },
  control: {
    padding: theme.spacing(10),
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  fab: {
    position: 'absolute',
    top: theme.spacing(10),
    right: theme.spacing(5),
    color: theme.palette.common.white,
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[600],
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const SingleProduct = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { productId } = useParams();
  const [product, setProduct] = useState({
    _id: null, name: '', image: '', views: 0,
  });

  const success = 'success';

  const load = async () => {
    try {
      const response = await Axios.get(`${apiUrl}product/${productId}`);
      if (response.status === 200) {
        setProduct(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const addToCart = () => {
    dispatch(addItem({ productId: product._id, price: product.price, quantity: 1 }));
    enqueueSnackbar(`${product.name} has added to cart!`, { success });
  };

  return (
    <>
      <Fab className={classes.fab} variant="extended" aria-label="add" onClick={addToCart}>
        <AddShoppingCartIcon className={classes.extendedIcon} />
        Add to Cart
      </Fab>
      <Container component="main" maxWidth="lg">
        <Paper className={classes.paper} elevation={0}>
          <Grid
            container
            spacing={2}
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Grid item xs={4}>
              <Typography variant="h4" align="right" gutterBottom>
                {product.name}
              </Typography>
              <Typography variant="body1" align="right">
                Espresso shots topped with hot water create a light layer of crema culminating in
                this wonderfully rich cup with depth and nuance.
                Pro Tip: For an additional boost, ask your barista to try this with an extra shot.
              </Typography>
            </Grid>
            <Grid item xs align="center">
              <Avatar
                alt={product.name}
                src={product.image}
                className={classes.large}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5" gutterBottom>
                Nutrition Information
              </Typography>
              <Typography variant="body1">
                Nutrition information is calculated based on our standard recipes.
                Only changing drink size will update this information.
                Other customizations will not.
              </Typography>
            </Grid>
            <Grid item xs={4} style={{ top: 20 }} align="center">
              <Chip
                icon={<FaceIcon />}
                label={`Total views: ${product.views}`}
                color="primary"
              />
            </Grid>
          </Grid>
        </Paper>
        <Viewers productId={productId} />
      </Container>
    </>
  );
};
export default function IntegrationNotistack() {
  return (
    <SnackbarProvider variant="success" maxSnack={3}>
      <SingleProduct />
    </SnackbarProvider>
  );
}