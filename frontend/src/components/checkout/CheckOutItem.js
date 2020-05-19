import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

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

const CheckOutItem = ({
  name, price, img, index, add, remove,
}) => {
  const classes = useStyles();

  const addItem = () => {
    add({
      name,
      price,
      img,
    });
  };

  const removeItem = () => {
    remove(index);
  };

  return (
    <>
      <Card>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            $
            {price.toFixed(2)}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="add" onClick={addItem}>
            <AddCircleOutlineIcon />
          </IconButton>
          <IconButton aria-label="remove" onClick={removeItem}>
            <RemoveCircleOutlineIcon />
          </IconButton>
        </div>
        <CardMedia
          className={classes.cover}
          image={img}
          title={name}
        />
      </Card>
    </>
  );
};

// Add default image if we have one
CheckOutItem.defaultProps = {
  name: '',
  img: '',
  price: 0,
  index: -1,
  add: () => {},
  remove: () => {},
};

CheckOutItem.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
  index: PropTypes.number,
  add: PropTypes.func,
  remove: PropTypes.func,
};


export default CheckOutItem;
