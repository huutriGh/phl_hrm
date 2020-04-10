import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';
import { selectCurrentUser } from './../../../../../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content',
  },
  avatar: {
    width: 60,
    height: 60,
  },
  name: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const Profile = (props) => {
  
  const { className, currentUser, dispatch, ...rest } = props;

  const classes = useStyles();

  const user = {
    name: currentUser.userName,
    avatar: '/images/avatars/download.png',
    bio: 'IT Deparment',
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Avatar
        alt='Person'
        className={classes.avatar}
        component={RouterLink}
        src={user.avatar}
        to='/settings'
      />
      <Typography className={classes.name} variant='h4'>
        {user.name}
      </Typography>
      <Typography variant='body2'>{user.bio}</Typography>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps, null)(Profile);
