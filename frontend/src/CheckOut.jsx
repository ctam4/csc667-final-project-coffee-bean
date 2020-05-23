import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import Axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import {
  Grid, Container, Paper, Button, Card, CardContent, CardActions, Typography,
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';

import CheckOutItem from './components/checkout/CheckOutItem';
import EmptyCheckOut from './components/checkout/EmptyCheckOut';

import { clearCart } from './actions/index';
import apiUrl from '../api';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

function ccyFormat(num) {
  return `$${num.toFixed(2)}`;
}

const CheckOut = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [cookies] = useCookies(['token']);
  const initialItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const [items, setItems] = useState([]);
  const [redirect, setRedirect] = useState('');

  const load = async () => {
    try {
      const response = await Axios.get(`${apiUrl}product`);
      if (response.status === 200) {
        setItems(initialItems.map((item) => {
          let newItem = item;
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

  const onSubmit = async () => {
    try {
      const response = await Axios.post(`${apiUrl}order`, {
        token: cookies.token,
        items: items.map((item) => ({
          productId: item.productId,
          price: item.price,
          quantity: item.quantity,
        })),
      });
      if (response.status === 200) {
        dispatch(clearCart());
        setRedirect(`/order-history/${response.data._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (redirect) {
    return <Redirect to={redirect} />;
  }
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
                <Card>
                  {/* this is sgoing to house the amount of items that are going to be checked out */}
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">Grand total</Typography>
                    <Typography variant="h6" component="h3">{ccyFormat(totalPrice)}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">Item count</Typography>
                    <Typography variant="h6" component="h3">{items.length}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={onSubmit}>Place Order</Button>
                    <Button size="small" color="secondary" onClick={() => dispatch(clearCart())}>Clear Cart</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          )}
        </Paper>
      </Container>
    </>
  );
};

export default CheckOut;
