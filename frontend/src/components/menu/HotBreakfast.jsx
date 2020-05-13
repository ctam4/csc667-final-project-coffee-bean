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

const HotBreakfast = () => {
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
          <Typography className={classes.title} variant="h4">Hot Breakfast</Typography>
        </Grid>
      </Grid>
      <Typography variant="h5" display="block">
        Breakfast Sandwiches & Wraps
      </Typography>
      <Divider />
      <div className={classes.root}>
        <Tooltip onClick={handleToggle('Veggie Wrap')} title="Add" interactive>
          <Avatar
            alt="Veggie Wrap"
            src="https://globalassets.starbucks.com/assets/e476519ecaa9441c955b585840cc2524.jpg?impolicy=1by1_wide_1242"
            className={classes.large}
          />
        </Tooltip>
        <Typography display="block">Veggie Wrap</Typography>
        <Tooltip
          onClick={handleToggle('Bacon, Sausage & Egg Wrap')}
          title="Add"
          interactive
        >
          <Avatar
            className={classes.large}
            alt="Bacon, Sausage & Egg Wrap"
            src="https://globalassets.starbucks.com/assets/27bd607e92354742bc8cf46b23f4ce39.jpg?impolicy=1by1_wide_1242"
          />
        </Tooltip>
        <Typography>Bacon, Sausage & Egg Wrap</Typography>
      </div>
      <div className={classes.root}>
        <Tooltip
          onClick={handleToggle('Cheddar & Egg')}
          title="Add"
          interactive
        >
          <Avatar
            alt="Cheddar & Egg"
            src="https://globalassets.starbucks.com/assets/a37c3ec673fa42f98f3b123a7d7ebbfe.jpg?impolicy=1by1_wide_1242"
            className={classes.large}
          />
        </Tooltip>
        <Typography>Cheddar Egg</Typography>
        <Tooltip
          onClick={handleToggle('Bacon & Cage-Free Egg')}
          title="Add"
          interactive
        >
          <Avatar
            className={classes.large}
            alt=" Bacon & Cage-Free Egg"
            src="https://globalassets.starbucks.com/assets/b7e25a03655741869ced8dfde8c70659.jpg?impolicy=1by1_wide_1242"
          />
        </Tooltip>
        <Typography> Bacon & Cage-Free Egg White</Typography>
      </div>
    </Grid>
  );
};

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <HotBreakfast />
    </SnackbarProvider>
  );
}
