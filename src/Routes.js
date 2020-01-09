import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import RouteWithLayout from './components/RouteWithLayout/RouteWithLayout.component';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';
import Account from './pages/Account/Account.component';
import Login from './pages/login/login.component';
import NotFound from './pages/NotFound/NotFound.component';
import Reception from './components/Reception/Reception.component';

const Routes = ({ currentUser }) => {
  console.log('currentUser Route: ', currentUser);
  return (
    <>
      <Route path='/sign-in' component={Login} />
      <RouteWithLayout
        currentUser={currentUser}
        component={Reception}
        exact
        layout={MainLayout}
        path='/'
      />
      <RouteWithLayout
        currentUser={currentUser}
        component={Account}
        exact
        layout={MainLayout}
        path='/account'
      />

      <RouteWithLayout
        currentUser={currentUser}
        component={NotFound}
        exact
        layout={MinimalLayout}
        path='/not-found'
      />

      <Redirect to='/not-found' />
    </>
  );
};

export default Routes;
