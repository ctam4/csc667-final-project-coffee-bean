import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  purple: {
    fontSize: 40,
    width: 'auto',
    height: 'auto',
    color: theme.palette.getContrastText(green[100]),
    backgroundColor: green[300],
  },
  menuButton: {
    color: 'black',
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    top: 0,
    flexGrow: 1,
  },
  toolbar: {
    borderBottom: `3px solid ${theme.palette.divider}`,
    backgroundColor: 'white',
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function newNavBar(props) {
  const classes = useStyles();

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar
          position="fixed"
          className={classes.appBar}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              to="/"
              component={Link}
            >
              <Avatar className={classes.purple}>CB</Avatar>
            </IconButton>
            <div className={classes.title}>
              <Button
                color="default"
                size="large"
                component={Link}
                to="/menu"
              >
                Menu
              </Button>
            </div>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              component={Link}
              to="/login"
            >
              Log In
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Divider />
      <Toolbar />
    </>
  );
}
