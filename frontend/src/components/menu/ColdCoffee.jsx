import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import { SnackbarProvider, useSnackbar } from 'notistack';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
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

const ColdCoffee = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const success = 'success';
  const [checked, setChecked] = React.useState([]);

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
    <Grid >
      <Grid
        container
        direction="row-reverse"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item>
          <Typography className={classes.title} variant="h4">Cold Coffees</Typography>
        </Grid>
      </Grid>
      <Typography variant="h5" display="block">
        Cold Brews
      </Typography>
      <Divider />
      <Grid container direction="row" justify="center" alignItems="center" spacing={10} className={classes.root} >
        <Grid item>
        <Tooltip onClick={handleToggle('Salted Honey')} title="Out of Stock" interactive>
          <Avatar
            alt="Salted Honey"
            src="https://globalassets.starbucks.com/assets/1f3d15ed2b534aaab4cbc8fbf2b8cccb.jpg?impolicy=1by1_wide_1242"
            className={classes.large}
          />
        </Tooltip>
        <Typography align="center"display="block">Salted Honey</Typography>
        </Grid><Grid item>
        <Tooltip onClick={handleToggle('Nitro Cold')} title="Out of Stock" interactive>
          <Avatar
            className={classes.large}
            alt="Nitro cold"
            src="https://globalassets.starbucks.com/assets/1697f7c55887448684fed85ecdd98e44.jpg?impolicy=1by1_wide_1242"
          />
        </Tooltip>
        <Typography align="center">Nitro Cold</Typography>
        </Grid>
        <Grid item>
        <Tooltip onClick={handleToggle('Salted Cream')} title="Out of Stock" interactive>
          <Avatar
            alt="Salted Cream"
            src="https://globalassets.starbucks.com/assets/6ffca0a4b4ec4af98d07c4e860baca45.jpg?impolicy=1by1_wide_1242"
            className={classes.large}
          />
        </Tooltip>
        <Typography align="center">Salted Cream</Typography>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center" spacing={10} className={classes.root} >
       <Grid item>
        <Tooltip
          onClick={handleToggle('Reverse Nitro')}
          title="Out of Stock"
          interactive
        >
          <Avatar
            className={classes.large}
            alt="Reverse Nitro"
            src="https://globalassets.starbucks.com/assets/1697f7c55887448684fed85ecdd98e44.jpg?impolicy=1by1_wide_1242"
          />
        </Tooltip>
        <Typography align="center">Reverse Nitro</Typography>
        </Grid>
        <Grid item>
        <Tooltip
          onClick={handleToggle('Vanilla Sweet')}
          title="Out of Stock"
          interactive
        >
          <Avatar
            alt="Vanilla Sweet"
            src="https://globalassets.starbucks.com/assets/3ee242d417904e7aa8f859fc1b07873c.jpg?impolicy=1by1_wide_1242"
            className={classes.large}
          />
        </Tooltip>
        <Typography align="center">Vanilla Sweet</Typography>
        </Grid>
        <Grid item>
        <Tooltip
          onClick={handleToggle('Vanilla Sweet')}
          title="Out of Stock"
          interactive
        >
          <Avatar
            className={classes.large}
            alt="Sweet Cream"
            src="https://globalassets.starbucks.com/assets/31d2824c896147fbaad4a1eac1ab1174.jpg?impolicy=1by1_wide_1242"
          />
        </Tooltip>
        <Typography align="center">Sweet Cream</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <ColdCoffee />
    </SnackbarProvider>
  );
}
