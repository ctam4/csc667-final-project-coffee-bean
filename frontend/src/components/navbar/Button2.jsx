import React from 'react';
import { Link } from 'react-router-dom';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'black',
    height: theme.spacing(4.5),
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[3],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(e) {
  e.preventDefault();
}

export default function CustomizedBreadcrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <StyledBreadcrumb
        color="primary"
        component={Link}
        to="/signup"
        label="Sign Up"
        onClick={handleClick}
      />
    </Breadcrumbs>
  );
}
