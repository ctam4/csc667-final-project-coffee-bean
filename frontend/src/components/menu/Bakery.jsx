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
      margin: theme.spacing(2),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
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
    marginLeft: 'auto',
  },
}));

const Bakery = () => {
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
    <Grid>
      <Grid
        container
        direction="row-reverse"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item>
          <Typography className={classes.title} variant="h4">Bakery</Typography>
        </Grid>
      </Grid>
      <Typography variant="h5" display="block">
        Bagels
      </Typography>
      <Divider />
      <Grid container direction="row" justify="center" alignItems="center" spacing={10} className={classes.root} >
        <Grid item>
        <Tooltip onClick={handleToggle('Plain Bagel')} title="Out of Stock" interactive>
          <Avatar
            alt="Plain Bagel"
            src="https://globalassets.starbucks.com/assets/2362e79aa0ab4c37a930956c67ab557a.jpg?impolicy=1by1_tight_288"
            className={classes.large}
          />
        </Tooltip>
        <Typography display="block">Plain Bagel</Typography>
        </Grid>
        <Grid item>
        <Tooltip
          onClick={handleToggle('Cheese, Onion & Garlic')}
          title="Out of Stock"
          interactive
        >
          <Avatar
            className={classes.large}
            alt="Cheese, Onion & Garlic"
            src="https://globalassets.starbucks.com/assets/738d89c837874a4ab31044808764b6fb.jpg?impolicy=1by1_wide_1242"
          />
        </Tooltip>
        <Typography>Cheese, Onion & Garlic</Typography>
      </Grid>
      <Grid item>
      <Tooltip
          onClick={handleToggle('Blueberry Bagel')}
          title="Out of Stock"
          interactive
        >
          <Avatar
            className={classes.large}
            alt=" Blueberry Bagel"
            src="https://globalassets.starbucks.com/assets/3bf55b5c24c44a6caa18acb357295f47.jpg?impolicy=1by1_wide_1242"
          />
        </Tooltip>
        <Typography> Blueberry </Typography>
      </Grid>
      <Grid item>
      <Tooltip
          onClick={handleToggle('Cinnamon Raisin')}
          title="Out of Stock"
          interactive
        >
          <Avatar
            alt="Cinnamon Raisin"
            src="https://globalassets.starbucks.com/assets/b4bce2e2d28141e79b64f9e2de4a789c.jpg?impolicy=1by1_wide_1242"
            className={classes.large}
          />
        </Tooltip>
        <Typography>Cinnamon Raisin</Typography>
      </Grid>
      </Grid>
    </Grid>
  );
};

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Bakery />
    </SnackbarProvider>
  );
}
