import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  menuIcon: {
    marginRight: '20px'
  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar>
        <IconButton
          className={classes.menuIcon}
          color='inherit'
          onClick={onSidebarOpen}
        >
          <MenuIcon />
        </IconButton>
        <RouterLink to='/'>
          <img alt='Logo' src='/images/logos/Logo_PHL.png' width = '185px' height = '45px' />
        </RouterLink>

        <div className={classes.flexGrow} />

        <IconButton className={classes.signOutButton} color='inherit'>
          <InputIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
