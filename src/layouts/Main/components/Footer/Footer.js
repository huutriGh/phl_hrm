import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    position: 'relatived',
    left: 0,
    bottom: 0,
    width: '100%',
    textAlign: 'center',
  },
}));

const Footer = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography variant='body1'>
        <Link component='a' href='https://www.phuhunglife.com/' target='_blank'>
          PHU HUNG LIFE
        </Link>
      </Typography>
      <Typography variant='caption'>
        5th Floor, CR3 - 05A, 109 Ton Dat Tien Street, Tan Phu Ward, District 7,
        HCMC
      </Typography>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
