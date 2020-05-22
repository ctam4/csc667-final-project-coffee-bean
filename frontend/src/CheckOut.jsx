import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import {
  Grid, Container, Paper,
} from '@material-ui/core';

import CheckOutItem from './components/checkout/CheckOutItem';
import ReviewOrder from './components/checkout/ReviewOrder';
import EmptyCheckOut from './components/checkout/EmptyCheckOut';

import apiUrl from '../api';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const CheckOut = () => {
  const classes = useStyles();
  const initialItems = useSelector((state) => state.cart.items);
  const [items, setItems] = useState([]);

  const load = async () => {
    try {
      const response = await Axios.get(`${apiUrl}product`);
      if (response.status === 200) {
        setItems(initialItems.map((item) => {
          let newItem;
          const product = response.data.find((item2) => item.productId === item2._id);
          newItem.name = product.name;
          newItem.image = product.image;
          return newItem;
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (initialItems.length > 0) {
      load();
    }
  }, [initialItems]);

  return (
    <>
      <Container component="main" maxWidth="lg">
        <Paper className={classes.paper} elevation={0}>
          {items.length === 0 ? (
            <EmptyCheckOut />
          ) : (
            <Grid
              container
              spacing={2}
              direction="row"
              justify="center"
            >
              <Grid item xs={8}>
                <Grid
                  container
                  spacing={3}
                  direction="row"
                  justify="center"
                >
                  {items.map((item) => (
                    <Grid item xs={12}>
                      <CheckOutItem
                        key={item.productId}
                        productId={item.productId}
                        price={item.price}
                        quantity={item.quantity}
                        name={item.name}
                        image={item.image}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <ReviewOrder />
              </Grid>
            </Grid>
          )}
        </Paper>
      </Container>
    </>
  );
};

export default CheckOut;
