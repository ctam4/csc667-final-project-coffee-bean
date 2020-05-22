import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardMedia, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

function ccyFormat(num) {
  return `$${num.toFixed(2)}`;
}

const OrderItem = (props) => {
  const classes = useStyles();

  const { image, name, price, quantity } = props;

  return (
    <React.Fragment>
      <Grid item lg={2} md={4} xs={6}>
        <Card>
          <CardMedia
            className={classes.media}
            image={image}
            title={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">{name}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">{quantity} &times; {ccyFormat(price)}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  );
};

OrderItem.defaultProps = {
  image: '',
  name: '',
  price: 0.00,
  quantity: 0,
};

OrderItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default OrderItem;
