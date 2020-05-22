import React from 'react';
// import './styles.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { clearCart } from '../../actions';

const useStyles = makeStyles((theme) => ({
}));

const ReviewOrder = ({ price, numOfItems, clearCart }) => {
  const classes = useStyles();

  const onFetch = () => {
    axios.post('/order').then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <Card>
        {/* this is sgoing to house the amount of items that are going to be checked out */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">Check Out</Typography>
          <Typography variant="body2" color="textSecondary" component="p">Grand total</Typography>
          <Typography variant="h6" component="h3">
            $
            {price.toFixed(2)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">Item count</Typography>
          <Typography variant="h6" component="h3">{numOfItems}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">Confirm</Button>
          <Button size="small" color="secondary" onClick={clearCart}>Clear Cart</Button>
        </CardActions>
      </Card>
    </>
  );
};

ReviewOrder.defaultProps = {
  price: 0,
  numOfItems: 0,
  clearCart: () => {},
}

ReviewOrder.propTypes = {
  price: PropTypes.number,
  numOfItems: PropTypes.number,
  clearCart: PropTypes.func,
}

export default connect(null, { clearCart })(ReviewOrder);
