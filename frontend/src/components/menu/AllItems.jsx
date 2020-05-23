import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
  card: {
    minWidth: 250,
  },
  media: {
    minHeight: 250,
  },
}));

const AllItems = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={4}
      direction="row"
      justify="flex-start"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Typography variant="h5">Drinks</Typography>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          spacing={3}
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_1242"
                  title="Hot Coffees"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">Hot Coffees</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://globalassets.starbucks.com/assets/49bf4333e9d048498a59a5a2b958165f.jpg?impolicy=1by1_tight_288"
                  title="Hot Teas"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">Hot Teas</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2015/12/HotDrinks_RussellHouseTavern_main.jpg"
                  title="Hot Drinks"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">Hot Drinks</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://copykat.com/wp-content/uploads/2020/01/Starbucks-Horchata-Frappuccino-Pin1.jpg"
                  title="Frappuccino"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">Frappuccino</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://www.torani.com/sites/default/files/styles/torani_syrup_recipe_detail/public/recipes/illustration/Iced%20Coffee%20with%20Cream_1.jpg?itok=l_RdY4pc"
                  title="Cold Coffees"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">Cold Coffees</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://www.ohhowcivilized.com/wp-content/uploads/2019/05/0519-iced-tea-9-1-720x720.jpg"
                  title="Iced Teas"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">Iced Teas</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">Food</Typography>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          spacing={3}
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://globalassets.starbucks.com/assets/a37c3ec673fa42f98f3b123a7d7ebbfe.jpg?impolicy=1by1_tight_288"
                  title="Hot Breakfast"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">Hot Breakfast</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJoYolaN5EgO6vIjrqNe72pRb365jXmmVXynMQn0sdrD-eb7O5&usqp=CAU"
                  title="Bakery"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">Bakery</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" display="block">At Home Coffee</Typography>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          spacing={3}
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://www.brandpointcontent.com/images/20830396.jpg"
                  title="Whole Bean"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">Whole Bean</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://cdn.shopify.com/s/files/1/2362/7179/products/UCC_The_Blend_114_Instant_Coffee_90_grams_Jar_One_Spoon_of_Instant_Coffee.jpg?v=1576790858"
                  title="VIA Instant"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">VIA Instant</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AllItems;
