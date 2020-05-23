import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import {
  Container, Paper, TextField, Avatar,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import UpdateIcon from '@material-ui/icons/Update';

import apiUrl from '../api';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    padding: theme.spacing(3),
  },
  container: {
    maxHeight: 660,
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));

const Inventory = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [add, setAdd] = useState(0);

  const load = async () => {
    try {
      const response1 = await Axios.get(`${apiUrl}product`);
      if (response1.status === 200) {
        setProducts(response1.data);
      }
      const response2 = await Axios.get(`${apiUrl}inventory`);
      if (response2.status === 200) {
        setQuantity(response2.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    load();
  }, [add]);

  const mergeById = (a1, a2) => a1.map((itm) => ({
    ...a2.find((item) => (item.productId === itm._id) && item),
    ...itm,
  }));
  const total = (mergeById(products, quantity));

  const updateInventory = async (productId, quantity) => {
    try {
      await Axios.post(`${apiUrl}inventory`, {
        productId,
        quantity,
      });
    } catch (error) {
      console.log(error);
    }
    load();
  };

  return (
    <>
      <Container component="main" maxWidth="lg">
        <Paper className={classes.paper} elevation={0}>
          <Paper elevation={1}>
            <TableContainer className={classes.container}>
              <Table stickyHeader>
                <caption>Inventory for a single coffee shop</caption>
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell style={{ fontWeight: 'bold' }}>Name</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Quantity in stock</TableCell>
                    <TableCell align="right">Quantity sold</TableCell>
                    <TableCell align="right">Sales</TableCell>
                    <TableCell align="right">&plus;Quantity&nbsp;(#)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {total.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell align="left"><Avatar src={row.image} className={classes.avatar} /></TableCell>
                      <TableCell component="th" scope="row">{row.name}</TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="right">{row.quantity}</TableCell>
                      <TableCell align="right">{Math.floor(Math.random() * Math.floor(99))}</TableCell>
                      <TableCell align="right">{Math.floor(Math.random() * Math.floor(99))}</TableCell>
                      <TableCell align="right">
                        <TextField
                          defaultValue={Math.floor(Math.random() * Math.floor(99))}
                          size="small"
                          type="number"
                          onChange={(e) => setAdd(e.target.value)}
                          InputLabelProps={{ shrink: true }}
                          style={{ width: 40, right: 30 }}
                          InputProps={{ disableUnderline: true }}
                        />
                        <UpdateIcon onClick={() => updateInventory(row._id, add)} style={{ color: green[500] }} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Paper>
      </Container>
    </>
  );
};

export default Inventory;
