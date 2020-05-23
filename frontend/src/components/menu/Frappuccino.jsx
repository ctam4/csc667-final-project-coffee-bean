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

const Frappuccino = () => {
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
          <Typography className={classes.title} variant="h4">Frappuccino Blended Beverages</Typography>
        </Grid>
      </Grid>
      <Typography variant="h5" display="block">
        Coffee Frappuccino
      </Typography>
      <Divider />
      <Grid container direction="row" justify="center" alignItems="center" spacing={10} className={classes.root} >
      <Grid item>
      <Tooltip
          onClick={handleToggle('Mocha Cookie Crumble')}
          title="Out of Stock"
          interactive
        >
          <Avatar
            alt="Mocha Cookie Crumble"
            src="https://globalassets.starbucks.com/assets/e4d9e996eb64453eb3ac7adb570c9b7b.jpg?impolicy=1by1_wide_1242"
            className={classes.large}
          />
        </Tooltip>
        <Typography align="center" display="block">Mocha Cookie</Typography>
        </Grid>
        <Grid item>
        <Tooltip
          onClick={handleToggle('Caramel Ribbon')}
          title="Out of Stock"
          interactive
        >
          <Avatar
            className={classes.large}
            alt="Caramel Ribbon"
            src="https://globalassets.starbucks.com/assets/bdc7fcf962884211ab83918d34f73393.jpg?impolicy=1by1_wide_1242"
          />
        </Tooltip>
        <Typography align="center">Caramel Ribbon</Typography>
        </Grid>
        <Grid item>
        <Tooltip
          onClick={handleToggle('Caffè Vanilla')}
          title="Out of Stock"
          interactive
        >
          <Avatar
            alt="Caffè Vanilla"
            src="https://globalassets.starbucks.com/assets/ae37d46a04064cae93f307d1b122c8fe.jpg?impolicy=1by1_wide_1242"
            className={classes.large}
          />
        </Tooltip>
        <Typography align="center">Caffè Vanilla</Typography>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center" spacing={10} className={classes.root} >
      <Grid item>
        <Tooltip
          onClick={handleToggle('Coffee Frappuccino')}
          title="Out of Stock"
          interactive
        >
          <Avatar
            className={classes.large}
            alt="Coffee Frappuccino"
            src="https://globalassets.starbucks.com/assets/2cf55066b3ec4547b452aebffe0870cf.jpg?impolicy=1by1_wide_1242"
          />
        </Tooltip>
        <Typography align="center">Coffee Frapuccino</Typography>
        </Grid>
        <Grid item>
        <Tooltip onClick={handleToggle('Java Chip')} title="Out of Stock" interactive>
          <Avatar
            alt="Java Chip"
            src="https://globalassets.starbucks.com/assets/87ab7a1c8b7b492cbc1d5c5d44e1007b.jpg?impolicy=1by1_wide_1242"
            className={classes.large}
          />
        </Tooltip>
        <Typography align="center">Java Chip</Typography>
        </Grid>
        <Grid item>
        <Tooltip onClick={handleToggle('Caramel')} title="Out of Stock" interactive>
          <Avatar
            className={classes.large}
            alt="Caramel"
            src="https://globalassets.starbucks.com/assets/bdc7fcf962884211ab83918d34f73393.jpg?impolicy=1by1_wide_1242"
          />
        </Tooltip>
        <Typography align="center">Caramel Blended</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={6}>
      <Frappuccino />
    </SnackbarProvider>
  );
}
