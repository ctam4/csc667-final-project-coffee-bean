import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import {
  Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@material-ui/core';

import apiUrl from '../api';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const TAX_RATE = 0.00;

function ccyFormat(num) {
  return `$${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return {
    desc, qty, unit, price,
  };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const SingleOrder = (props) => {
  const classes = useStyles();
  const [cookies] = useCookies(['token']);
  const { orderId } = useParams();
  const [date, setDate] = useState((new Date()).toISOString());
  const [rows, setRows] = useState([]);

  const invoiceSubtotal = subtotal(rows);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  const load = async () => {
    try {
      const response = await Axios.get(`${apiUrl}order/${orderId}?token=${cookies.token}`);
      if (response.status === 200) {
        const response2 = await Axios.get(`${apiUrl}product`);
        if (response2.status === 200) {
          setRows(response.data.items.map((item) => {
            const product = response2.data.find((item2) => item2._id === item.productId);
            return createRow(product.name, item.price, item.quantity);
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
    <>
      <Container component="main" maxWidth="lg">
        <Paper className={classes.paper} elevation={0}>
          <Paper elevation={1}>
            <TableContainer>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell colSpan={2}>{`Order #${orderId} (Placed on ${date})`}</TableCell>
                    <TableCell align="right" colSpan={2}>Price</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Unit</TableCell>
                    <TableCell align="right">Sum</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.desc}>
                      <TableCell>{row.desc}</TableCell>
                      <TableCell align="right">{row.qty}</TableCell>
                      <TableCell align="right">{row.unit}</TableCell>
                      <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell rowSpan={3} colSpan={2} />
                    <TableCell>Subtotal</TableCell>
                    <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Tax ({`${(TAX_RATE * 100).toFixed(0)}%`})</TableCell>
                    <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Total</TableCell>
                    <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Paper>
      </Container>
    </>
  );
};

export default SingleOrder;
