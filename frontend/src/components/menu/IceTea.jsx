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

const IceTea = () => {
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
          <Typography className={classes.title} variant="h4">Iced Teas</Typography>
        </Grid>
      </Grid>
      <Typography variant="h5" display="block">
        Iced Chai Teas
      </Typography>
      <Divider />
      <Grid container direction="row" justify="center" alignItems="center" spacing={10} className={classes.root} >
        <Grid item>
        <Tooltip
          onClick={handleToggle('Chai Tea Latte')}
          title="Out of Stock"
          interactive
        >
          <Avatar
            alt="Chai Tea Latte"
            src="https://globalassets.starbucks.com/assets/7b51b01b4a394a829ff9df4ef9f3be3c.jpg?impolicy=1by1_wide_1242"
            className={classes.large}
          />
        </Tooltip>
        <Typography align="center"display="block">Chai Tea Latte</Typography>
        </Grid>
        <Grid item>
        <Tooltip
          onClick={handleToggle('Iced Black Tea')}
          title="Out of Stock"
          interactive
        >
          <Avatar
            className={classes.large}
            alt="Iced Black Tea"
            src="https://globalassets.starbucks.com/assets/b87b4ec73da2443d9e505319ac46168b.jpg?impolicy=1by1_wide_1242"
          />
        </Tooltip>
        <Typography align="center">Iced Black Tea</Typography>
        </Grid>
        <Grid item>
        <Tooltip
          onClick={handleToggle('Royal English')}
          title="Out of Stock"
          interactive
        >
          <Avatar
            alt="Royal English"
            src="https://globalassets.starbucks.com/assets/9cce6d52c029474bb861d72bca0a65b3.jpg?impolicy=1by1_wide_1242"
            className={classes.large}
          />
        </Tooltip>
        <Typography align="center">Royal English</Typography>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center" spacing={10} className={classes.root} >
      <Grid item>
      <Tooltip
          onClick={handleToggle('Matcha Green Tea')}
          title="Out of Stock"
          interactive
        >
          <Avatar
            className={classes.large}
            alt="Matcha Green Tea"
            src="https://globalassets.starbucks.com/assets/21f5c9e19d614c7481c1a964e81d1bbc.jpg?impolicy=1by1_wide_1242"
          />
        </Tooltip>
        <Typography align="center">Matcha Green Tea</Typography>
      </Grid>
      <Grid item>
        <Tooltip
          onClick={handleToggle('Iced Green Tea')}
          title="Out of Stock"
          interactive
        >
          <Avatar
            alt="Iced Green Tea"
            src="https://globalassets.starbucks.com/assets/764d8822c2a345cd873127845a3b09f4.jpg?impolicy=1by1_wide_1242"
            className={classes.large}
          />
        </Tooltip>
        <Typography align="center">Iced Green T</Typography>
        </Grid>
        <Grid item>
        <Tooltip
          onClick={handleToggle('Matcha Lemonade')}
          title="Out of Stock"
          interactive
        >
          <Avatar
            className={classes.large}
            alt="Matcha Lemonade"
            src="https://globalassets.starbucks.com/assets/8cd203f920844ccc95dd514f8b0d4972.jpg?impolicy=1by1_wide_1242"
          />
        </Tooltip>
        <Typography align="center">Matcha Lemonade</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <IceTea />
    </SnackbarProvider>
  );
}
