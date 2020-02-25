import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import RouteWithLayout from './components/RouteWithLayout/RouteWithLayout.component';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';
import Account from './pages/Account/Account.component';
import Login from './pages/login/login.component';
import NotFound from './pages/NotFound/NotFound.component';
import Reception from './pages/Reception/Reception.component';
import Examination from './pages/Examnination/Examination.conponent';

const Routes = ({ currentUser }) => {
  return (
    <Switch>
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
      <RouteWithLayout
      currentUser={currentUser}
      component={Examination}
      exact
      layout={MainLayout}
      path='/examination'
    />
      <Redirect to='/not-found' />
    </Switch>
  );
};

export default Routes;
