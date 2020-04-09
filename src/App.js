import React, { useEffect } from 'react';
import { Chart } from 'react-chartjs-2';
import { connect } from 'react-redux';
import './assets/scss/index.scss';
import { chartjs } from './helpers';
import { checkUserSession } from './redux/user/user.actions';
import Routes from './Routes';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import './App.css';
Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
});

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return <Routes currentUser={currentUser} />;
};

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
