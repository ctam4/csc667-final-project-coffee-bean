import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import { SnackbarProvider, useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    flexFlow: 1,
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

const HotCoffee = () => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const success = 'success';
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (value.length > 0) {
      newChecked.push(value);
      setChecked(newChecked);
      enqueueSnackbar(`${value} added!`, { success });
    } else {
      // alert('try again');
    }
  };

  return (
    <Grid className={classes.mainDiv}>
      <Grid
        container
        direction="row-reverse"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item>
          <Typography className={classes.title} variant="h4">Hot Coffees</Typography>
        </Grid>
      </Grid>
      <Typography variant="h5" display="block">
        Americanos
      </Typography>
      <Divider />
      <div className={classes.root}>
        <Tooltip
          onClick={handleToggle('Caffe Americano')}
          title="Add for $3"
          interactive
        >
          <Avatar
            alt="Caffe Americano"
            src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_1242"
            className={classes.large}
          />
        </Tooltip>
        <Typography display="block">Cafe Americano</Typography>
        <Tooltip
          onClick={handleToggle('Americano Blonde')}
          title="Add"
          interactive
        >
          <Avatar
            className={classes.large}
            alt="Americano Blonde"
            src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_1242"
          />
        </Tooltip>
        <Typography>American Blonde</Typography>
      </div>
      <Typography variant="h5" display="block">
        Brewed Coffees
      </Typography>
      <Divider />
      <div className={classes.root}>
        <Tooltip onClick={handleToggle('Blonde Roast')} title="Add" interactive>
          <Avatar
            alt="Blonde Roast"
            src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_1242"
            className={classes.large}
          />
        </Tooltip>
        <Typography>Blonde Roast</Typography>
        <Tooltip onClick={handleToggle('Caffè Misto')} title="Add" interactive>
          <Avatar
            className={classes.large}
            alt="Caffè Misto"
            src="https://globalassets.starbucks.com/assets/d668acbc691b47249548a3eeac449916.jpg?impolicy=1by1_wide_1242"
          />
        </Tooltip>
        <Typography>Caffè Misto</Typography>
      </div>
      <div className={classes.root}>
        <Tooltip onClick={handleToggle('Pike Roast')} title="Add" interactive>
          <Avatar
            alt="Pike Roast"
            src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_1242"
            className={classes.large}
          />
        </Tooltip>
        <Typography>Pike Pla Roast</Typography>
        <Tooltip onClick={handleToggle('Decaf Pike')} title="Add" interactive>
          <Avatar
            className={classes.large}
            alt="Decaf Pike"
            src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_1242"
          />
        </Tooltip>
        <Typography>Decaf Pike</Typography>
      </div>
      <Typography variant="h5" display="block">
        Cappuccinos
      </Typography>
      <Divider />
      <div className={classes.root}>
        <Tooltip
          onClick={handleToggle('Cappuccino blond')}
          title="Add"
          interactive
        >
          <Avatar
            alt="Cappuccino blond"
            src="https://d3mrtwiv4dr09z.cloudfront.net/media/catalog/product/cache/2/image/720x540/9df78eab33525d08d6e5fb8d27136e95/1/8/18beverage_Cappuccino_720x540.jpg"
            className={classes.large}
          />
        </Tooltip>
        <Typography>Cappuccino blod</Typography>
        <Tooltip onClick={handleToggle('Cappuccino')} title="Add" interactive>
          <Avatar
            className={classes.large}
            alt="Cappuccino"
            src="https://d3mrtwiv4dr09z.cloudfront.net/media/catalog/product/cache/2/image/720x540/9df78eab33525d08d6e5fb8d27136e95/1/8/18beverage_Cappuccino_720x540.jpg"
          />
        </Tooltip>
        <Typography>Cappuccino </Typography>
      </div>
      <Typography variant="h5" display="block">
        Espresso Shots
      </Typography>
      <Divider />
      <div className={classes.root}>
        <Tooltip
          onClick={handleToggle('Expresso pana')}
          title="Add"
          interactive
        >
          <Avatar
            alt="Espresso pana"
            src="https://globalassets.starbucks.com/assets/ec519dd5642c41629194192cce582135.jpg?impolicy=1by1_wide_1242"
            className={classes.large}
          />
        </Tooltip>
        <Typography>Espresso pana</Typography>
        <Tooltip onClick={handleToggle('Expresso')} title="Add" interactive>
          <Avatar
            className={classes.large}
            alt="Expresso"
            src="https://globalassets.starbucks.com/assets/e9330b18ae524e69bdcbe97460d6f5bb.jpg?impolicy=1by1_wide_1242"
          />
        </Tooltip>
        <Typography>Expresso</Typography>
      </div>
    </Grid>
  );
};

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <HotCoffee />
    </SnackbarProvider>
  );
}
