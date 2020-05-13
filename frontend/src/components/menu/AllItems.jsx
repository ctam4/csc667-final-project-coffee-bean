import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    flexGrow: 1,
    maxWidth: '100%',
    alignItems: 'center',
    display: 'flex',
    '& > *': {
      margin: theme.spacing(3),
    },
  },
  large: {
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(4),
  },
  mainDiv: {
  },
  margin: {
    flexGrow: 1,
    marginLeft: 'auto',
  },
}));

const AllItems = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.mainDiv}>
      <Grid
        container
        direction="row-reverse"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item>
          <Typography className={classes.title} variant="h4">Menu</Typography>
        </Grid>
      </Grid>
      <Typography variant="h5" display="block">
        Drinks
      </Typography>
      <Divider />
      <div className={classes.root}>
        <Avatar
          alt="Hot Coffees"
          src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_1242"
          className={classes.large}
        />
        <Typography>Hot Coffees</Typography>
        <Avatar
          className={classes.large}
          alt="Hot Tea"
          src="https://globalassets.starbucks.com/assets/49bf4333e9d048498a59a5a2b958165f.jpg?impolicy=1by1_tight_288"
        />
        <Typography>Hot Teas</Typography>
      </div>
      <div className={classes.root}>
        <Avatar
          alt="Hot Drinks"
          src="https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2015/12/HotDrinks_RussellHouseTavern_main.jpg"
          className={classes.large}
        />
        <Typography>Hot Drinks</Typography>
        <Avatar
          className={classes.large}
          alt="Frappuccino"
          src="https://copykat.com/wp-content/uploads/2020/01/Starbucks-Horchata-Frappuccino-Pin1.jpg"
        />
        <Typography>Frappuccino</Typography>
      </div>
      <div className={classes.root}>
        <Avatar
          alt="Cold Coffeese"
          src="https://www.torani.com/sites/default/files/styles/torani_syrup_recipe_detail/public/recipes/illustration/Iced%20Coffee%20with%20Cream_1.jpg?itok=l_RdY4pc"
          className={classes.large}
        />
        <Typography>Cold Coffees</Typography>
        <Avatar
          className={classes.large}
          alt="Iced Teas"
          src="https://www.ohhowcivilized.com/wp-content/uploads/2019/05/0519-iced-tea-9-1-720x720.jpg"
        />
        <Typography>Iced Teas</Typography>
      </div>
      <Typography variant="h5" display="block">
        Food
      </Typography>
      <Divider />
      <div className={classes.root}>
        <Avatar
          alt="Hot Breakfast"
          src="https://globalassets.starbucks.com/assets/a37c3ec673fa42f98f3b123a7d7ebbfe.jpg?impolicy=1by1_tight_288"
          className={classes.large}
        />
        <Typography>Hot Breakfast</Typography>
        <Avatar
          className={classes.large}
          alt="Bakery"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJoYolaN5EgO6vIjrqNe72pRb365jXmmVXynMQn0sdrD-eb7O5&usqp=CAU"
        />
        <Typography>Bakery</Typography>
      </div>
      <Typography variant="h5" display="block">
        At Home Coffee
      </Typography>
      <Divider />
      <div className={classes.root}>
        <Avatar
          alt="Whole Bean"
          src="https://www.brandpointcontent.com/images/20830396.jpg"
          className={classes.large}
        />
        <Typography>Whole Bean</Typography>
        <Avatar
          className={classes.large}
          alt="VIA Instant"
          src="https://cdn.shopify.com/s/files/1/2362/7179/products/UCC_The_Blend_114_Instant_Coffee_90_grams_Jar_One_Spoon_of_Instant_Coffee.jpg?v=1576790858"
        />
        <Typography>VIA Instant</Typography>
      </div>
    </Grid>
  );
};

export default AllItems;
