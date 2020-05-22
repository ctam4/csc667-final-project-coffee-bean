import React from 'react';
// import './components/checkout/styles.css';

import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import {
  Grid, Container, Paper,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { addItem, removeItem } from './actions';

import CheckOutItem from './components/checkout/CheckOutItem';
import ReviewOrder from './components/checkout/ReviewOrder';
import EmptyCheckOut from './components/checkout/EmptyCheckOut';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const CheckOut = ({
  items, totalPrice, removeItem, addItem,
}) => {
  const classes = useStyles();
  const isEmpty = () => items.length <= 0;

  const renderCheckOutList = (items) => (
    <Grid
      container
      spacing={3}
      direction="row"
      justify="center"
    >
      {items.map((item, idx) => (
        <Grid item xs={12}>
          <CheckOutItem
            key={idx}
            name={item.name}
            price={item.price}
            img={item.img}
            index={idx}
            add={addItem}
            remove={removeItem}
          />
        </Grid>
      ))}
    </Grid>
  );

  return (
    <>
      <Container component="main" maxWidth="lg">
        <Paper className={classes.paper} elevation={0}>
          {items.length === 0 && (
          <EmptyCheckOut />
          )}
          {items.length !== 0 && (
          <Grid
            container
            spacing={2}
            direction="row"
            justify="center"
          >
            <Grid item xs={8}>
              {renderCheckOutList(items)}
            </Grid>
            <Grid item xs={4}>
              <ReviewOrder price={totalPrice} numOfItems={items.length} />
            </Grid>
          </Grid>
          )}
        </Paper>
      </Container>
    </>
  );
};

CheckOut.defaultProps = {
  items: [],
  totalPrice: 0,
  addItem: () => {},
  removeItem: () => {},
};

CheckOut.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  totalPrice: PropTypes.number,
  addItem: PropTypes.func,
  removeItem: PropTypes.func,

};

const mapStateToProps = (state) => ({
  totalPrice: (() => {
    let total = 0;
    state.cart.items.forEach((item) => (total += item.price));
    return total;
  })(),
  items: state.cart.items,
});

const mapDispatchToProps = {
  addItem,
  removeItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
