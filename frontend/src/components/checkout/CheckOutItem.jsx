import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import {
  IconButton, Card, CardContent, CardMedia, Typography,
} from '@material-ui/core';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

import { removeItem } from '../../actions/index';

const useStyles = makeStyles((theme) => ({
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

function ccyFormat(num) {
  return `$${num.toFixed(2)}`;
}

const CheckOutItem = ({
  productId, price, quantity, name, image,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(removeItem(productId));
  };

  return (
    <>
      <Card>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">{name}</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {`${quantity} `}&times;{` ${ccyFormat(price)}`}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="remove" onClick={removeFromCart}>
            <RemoveCircleOutlineIcon />
          </IconButton>
        </div>
        <CardMedia
          className={classes.cover}
          image={image}
          title={name}
        />
      </Card>
    </>
  );
};

// Add default image if we have one
CheckOutItem.defaultProps = {
  productId: '',
  price: 0.00,
  quantity: 0,
  name: '',
  image: '',
};

CheckOutItem.propTypes = {
  productId: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CheckOutItem;
