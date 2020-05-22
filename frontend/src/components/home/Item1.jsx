import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FooterButton from './FooterButton';

const useStyles = makeStyles((theme) => ({
  divider: {
    backgroundColor: 'blue',
    maxWidth: 330,
    border: '50px',
    left: 0,
  },
  media: {
    maxHeight: 500,
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  Typography: {
    marginTop: theme.spacing(2),
  },
}));

export default function Item1() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader
        avatar={(
          <Avatar aria-label="recipe" className={classes.avatar}>
            CB
          </Avatar>
        )}
        action={(
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        )}
        title="Coffee Bean"
        subheader="May 22, 2020"
      />
      <CardMedia
        className={classes.media}
        image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-60240.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography
          align="center"
          // color="textSecondary"
          color="black"
          variant="h6"
          component="p"
        >
          $0 Delivery Fee for All Orders
        </Typography>
        <Typography
          className={classes.Typography}
          color="black"
          variant="h8"
          component="p"
        >
          Get your favorite food and drinks delivered.*
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <FooterButton />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h6" gutterBottom>Method</Typography>
          <Typography variant="body1">
            Caramel syrup meets coffee, milk and ice for a rendezvous in the
            blender, while whipped cream and buttery caramel sauce layer the
            love on top. To change things up, try it affogato-style with a hot
            espresso shot poured right over the top.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
