import { makeStyles } from '@material-ui/core/styles';
import { Paper, Container, Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import apiUrl from '../api';

import MainPic1 from './components/home/Item1';
import MainPic2 from './components/home/Item2';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  const uploadData = async () => {
    const dataDump = [
      {
        "name": "Decaf Pike",
        "price": 3,
        "image": "https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_1242",
      },
      {
        "name": "Caffe Americano",
        "price": 4,
        "image": "https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_1242"
      },
      {
        "name": "Americano Blonde",
        "price": 3,
        "image": "https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_1242",
      },
      {
        "name": "Blonde Roast",
        "price": 2,
        "image": "https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_1242",
      },
      {
        "name": "Caffè Misto",
        "price": 4,
        "image": "https://globalassets.starbucks.com/assets/d668acbc691b47249548a3eeac449916.jpg?impolicy=1by1_wide_1242"
      },
      {
        "name": "Decaf Pike",
        "price": 2,
        "image": "https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_1242"
      },
      {
        "name": "Cappuccino blond",
        "price": 3,
        "image": "https://d3mrtwiv4dr09z.cloudfront.net/media/catalog/product/cache/2/image/720x540/9df78eab33525d08d6e5fb8d27136e95/1/8/18beverage_Cappuccino_720x540.jpg"
      },
      {
        "name": "Cappuccino",
        "price": 3,
        "image": "https://d3mrtwiv4dr09z.cloudfront.net/media/catalog/product/cache/2/image/720x540/9df78eab33525d08d6e5fb8d27136e95/1/8/18beverage_Cappuccino_720x540.jpg"
      },
      {
        "name": "Expresso pana",
        "price": 4,
        "image": "https://globalassets.starbucks.com/assets/ec519dd5642c41629194192cce582135.jpg?impolicy=1by1_wide_1242"
      },
      {
        "name": "Expresso",
        "price": 3,
        "image": "https://globalassets.starbucks.com/assets/e9330b18ae524e69bdcbe97460d6f5bb.jpg?impolicy=1by1_wide_1242",
      }
    ];
    try {
      const response = await Axios.get(`${apiUrl}product`)
      if (response.status === 200) {
        if (response.data.length === 0) {
          await Promise.all([
            dataDump.forEach(async (product) => {
              await Axios.post(`${apiUrl}product`, product);
            }),
          ]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    uploadData();
  }, []);

  return (
    <>
      <Container component="main" maxWidth="lg">
        <Paper className={classes.paper} elevation={0}>
          <Grid
            container
            spacing={2}
            direction="row"
            justify="center"
          >
            <Grid item xs>
              <MainPic1 />
            </Grid>
            <Grid item xs>
              <MainPic2 />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
