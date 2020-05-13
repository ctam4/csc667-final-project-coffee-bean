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
    <Grid className={classes.mainDiv}>
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
      <div className={classes.root}>
        <Tooltip
          onClick={handleToggle('Chai Tea Latte')}
          title="Add"
          interactive
        >
          <Avatar
            alt="Chai Tea Latte"
            src="https://globalassets.starbucks.com/assets/7b51b01b4a394a829ff9df4ef9f3be3c.jpg?impolicy=1by1_wide_1242"
            className={classes.large}
          />
        </Tooltip>
        <Typography display="block">Chai Tea Latte</Typography>
        <Tooltip
          onClick={handleToggle('Iced Black Tea')}
          title="Add"
          interactive
        >
          <Avatar
            className={classes.large}
            alt="Iced Black Tea"
            src="https://globalassets.starbucks.com/assets/b87b4ec73da2443d9e505319ac46168b.jpg?impolicy=1by1_wide_1242"
          />
        </Tooltip>
        <Typography>Iced Black Tea</Typography>
      </div>
      <div className={classes.root}>
        <Tooltip
          onClick={handleToggle('Royal English')}
          title="Add"
          interactive
        >
          <Avatar
            alt="Royal English"
            src="https://globalassets.starbucks.com/assets/9cce6d52c029474bb861d72bca0a65b3.jpg?impolicy=1by1_wide_1242"
            className={classes.large}
          />
        </Tooltip>
        <Typography>Royal English</Typography>
        <Tooltip
          onClick={handleToggle('Matcha Green Tea')}
          title="Add"
          interactive
        >
          <Avatar
            className={classes.large}
            alt="Matcha Green Tea"
            src="https://globalassets.starbucks.com/assets/21f5c9e19d614c7481c1a964e81d1bbc.jpg?impolicy=1by1_wide_1242"
          />
        </Tooltip>
        <Typography>Matcha Green Tea</Typography>
      </div>
      <div className={classes.root}>
        <Tooltip
          onClick={handleToggle('Iced Green Tea')}
          title="Add"
          interactive
        >
          <Avatar
            alt="Iced Green Tea"
            src="https://globalassets.starbucks.com/assets/764d8822c2a345cd873127845a3b09f4.jpg?impolicy=1by1_wide_1242"
            className={classes.large}
          />
        </Tooltip>
        <Typography>Iced Green T</Typography>
        <Tooltip
          onClick={handleToggle('Matcha Lemonade')}
          title="Add"
          interactive
        >
          <Avatar
            className={classes.large}
            alt="Matcha Lemonade"
            src="https://globalassets.starbucks.com/assets/8cd203f920844ccc95dd514f8b0d4972.jpg?impolicy=1by1_wide_1242"
          />
        </Tooltip>
        <Typography>Matcha Lemonade</Typography>
      </div>
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
