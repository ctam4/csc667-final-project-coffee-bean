import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import Button1 from './components/navbar/Button1';
import Button2 from './components/navbar/Button2';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import { Grid } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
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
    fontWeight: 'bold',
    color: 'black',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      marginLeft: theme.spacing(3),
    },
  },
  appBar: {
    top: 0,
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
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar 
        display="flex" flexDirection="row-reverse" p={1} m={1}
        position="fixed" className={classes.appBar}>
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
            <Typography  variant="h6" noWrap>
              <Button
              display="flex"  p={1} m={1}
                style={{ fontSize: '26px', fontWeight: 'bold' }}
                variant="h4"
                to="/Menu"
                component={Link}
              >
                MENU
              </Button>
            </Typography>
            <Typography className={classes.title} variant="h6" noWrap>

            </Typography>
            <Typography className={classes.title} variant="h6" noWrap>

            </Typography>

            <Grid className={classes.grow} />
            <Grid display="flex" flexDirection="row-reverse" p={1} m={1}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge color="secondary">
                  <Button1 />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge color="secondary">
                  <Button2 />
                </Badge>
              </IconButton>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Divider />
      <Toolbar />
    </React.Fragment>
  );
}
