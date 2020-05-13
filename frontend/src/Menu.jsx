import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import { red } from '@material-ui/core/colors';
import AllItems from './components/menu/AllItems';
import HotCoffee from './components/menu/HotCoffee';
import ColdCoffee from './components/menu/ColdCoffee';
import Frappuccino from './components/menu/Frappuccino';
import IceTea from './components/menu/IceTea';
import Bakery from './components/menu/Bakery';
import HotBreakfast from './components/menu/HotBreakfast';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  tabs: {
    fontWeight: 'bold',
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  fab: {
    position: 'absolute',
    top: theme.spacing(2),
    left: theme.spacing(2),
    color: theme.palette.common.white,
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[600],
    },
  },
  extendedIcon: {
    flexGrow: 1,
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
}));

const Menu = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Tabs
          display="initial"
          orientation="vetical"
          variant="scrollable"
          scrollButtons="auto"
          value={value}
          onChange={handleChange}
          aria-label="Menu"
          className={classes.tabs}
        >
          <Tab
            style={{ fontWeight: 'bold' }}
            label="All Products"
            {...a11yProps(0)}
          />
          <Tab label="Hot Coffees" {...a11yProps(1)} />
          <Tab label="Frappuccino" {...a11yProps(2)} />
          <Tab label="Cold Coffees" {...a11yProps(3)} />
          <Tab label="Ice Tea" {...a11yProps(4)} />
          <Tab label="Hot Breakfast" {...a11yProps(5)} />
          <Tab label="Bakery" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <Fab className={classes.fab} variant="extended" aria-label="add">
        <ShoppingCartSharpIcon className={classes.extendedIcon} />
      </Fab>
      <TabPanel value={value} index={0}>
        <AllItems />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HotCoffee />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Frappuccino />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ColdCoffee />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <IceTea />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <HotBreakfast />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Bakery />
      </TabPanel>
    </div>
  );
};

export default Menu;
