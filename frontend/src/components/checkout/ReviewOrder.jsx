import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import Axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import {
  Button, Card, CardContent, CardActions, Typography,
} from '@material-ui/core';

import { clearCart } from '../../actions/index';
import apiUrl from '../../../api';

const useStyles = makeStyles((theme) => ({
}));

function ccyFormat(num) {
  return `$${num.toFixed(2)}`;
}

const ReviewOrder = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const [cookies] = useCookies(['token']);

  const onSubmit = async () => {
    try {
      const response = await Axios.post(`${apiUrl}order`, {
        token: cookies.token,
        items,
      });
      if (response.status === 200) {
        alert('Order placed - should be replaced'); // debug
        dispatch(clearCart());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
    </>
  );
};

export default ReviewOrder;
