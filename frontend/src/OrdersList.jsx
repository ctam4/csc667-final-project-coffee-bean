import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import {
  Container, Paper, Collapse, IconButton,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import OrderDetails from './components/order-history/OrderDetails';

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

function createData(id, date, total) {
  return {
    id,
    date,
    total,
    items: [
      { image: '', name: 'hello world', price: 12.00, quantity: 3 },
      { image: '', name: 'bye world', price: 12.00, quantity: 3 },
      { image: '', name: 'world', price: 1.00, quantity: 1 },
      { image: '', name: 'surcharge', price: 13.00, quantity: 1 },
    ],
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
        <TableCell component="th" scope="row">{row.id}</TableCell>
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
    id: PropTypes.number.isRequired,
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

const OrdersList = () => {
  const classes = useStyles();

  const [rows, setRows] = useState([]);

  const load = async () => {
    // TODO fetch
    setRows([
      createData('1', 'date', 6.0),
      createData('2', 'date', 6.0),
      createData('3', 'date', 6.0),
      createData('4', 'date', 6.0),
      createData('5', 'date', 6.0),
      createData('6', 'date', 6.0),
      createData('7', 'date', 6.0),
      createData('8', 'date', 6.0),
      createData('9', 'date', 6.0),
      createData('10', 'date', 6.0),
      createData('11', 'date', 6.0),
    ]);
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

export default OrdersList;
