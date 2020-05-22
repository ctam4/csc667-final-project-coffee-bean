import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Axios from 'axios';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import {
  Container, Paper, Collapse, IconButton,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import OrderDetails from './components/order-history/OrderDetails';

import apiUrl from '../api';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  paper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    padding: theme.spacing(3),
  },
  container: {
    maxHeight: 660,
  },
}));

function ccyFormat(num) {
  return `$${num.toFixed(2)}`;
}

function createData(orderId, date, total, items) {
  return {
    orderId,
    date,
    total,
    items,
  };
}

function Row(props) {
  const classes = useStyles();

  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">{row.orderId}</TableCell>
        <TableCell>{row.date}</TableCell>
        <TableCell align="right">{ccyFormat(row.total)}</TableCell>
      </TableRow>
      <TableRow>
        {open && (
          <TableCell colSpan={4}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <OrderDetails items={row.items} />
            </Collapse>
          </TableCell>
        )}
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    orderId: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        quantity: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

const OrderHistory = () => {
  const classes = useStyles();
  const [cookies] = useCookies(['token']);
  const [rows, setRows] = useState([]);

  const load = async () => {
    try {
      const response = await Axios.get(`${apiUrl}order?token=${cookies.token}`);
      if (response.status === 200) {
        const response2 = await Axios.get(`${apiUrl}product`);
        if (response2.status === 200) {
          setRows(response.data.map((item) => {
            const total = item.items.reduce((accumulator, item2) => accumulator + item2.price * item2.quantity, 0);
            const items = item.items.map((item2) => {
              const product = response2.data.find((item3) => item3._id === item2.productId);
              return {
                name: product.name,
                image: product.image,
                price: item2.price,
                quantity: item2.quantity,
              };
            });
            return createData(item._id, item.date, total, items);
          }));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <React.Fragment>
      <Container component="main" maxWidth="lg">
        <Paper className={classes.paper} elevation={0}>
          <Paper elevation={1}>
            <TableContainer className={classes.container}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell>Order #</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell align="right">Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <Row key={row.name} row={row} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default OrderHistory;
