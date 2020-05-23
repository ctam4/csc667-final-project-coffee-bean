import React from 'react';
import PropTypes from 'prop-types';

import { Box, Typography, Grid } from '@material-ui/core';

import OrderItem from './OrderItem';

const OrderDetails = (props) => {
  const { items } = props;

  return (
    <>
      <Box margin={1}>
        <Typography variant="h6" gutterBottom component="div">Details</Typography>
        <Grid
          container
          spacing={3}
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          {items.map((itemRow) => (
            <OrderItem image={itemRow.image} name={itemRow.name} price={itemRow.price} quantity={itemRow.quantity} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

OrderDetails.defaultProps = {
  items: [],
};

OrderDetails.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      quantity: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default OrderDetails;
