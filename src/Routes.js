import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import RouteWithLayout from './components/RouteWithLayout/RouteWithLayout.component';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';
import Examination from './pages/Examnination/Examination.conponent';
import Login from './pages/login/login.component';
import NotFound from './pages/NotFound/NotFound.component';
import Dashboard from './pages/Dashboard/Dashboard';
import Approve from './pages/Approve/Approve';

const Routes = ({ currentUser }) => {
  return (
    <Switch>
      <Route path='/sign-in' component={Login} />

      <RouteWithLayout
        currentUser={currentUser}
        component={Dashboard}
        exact
        layout={MainLayout}
        path='/'
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
      <RouteWithLayout
        currentUser={currentUser}
        component={Approve}
        exact
        layout={MainLayout}
        path='/approve'
      />
      <Redirect to='/not-found' />
    </Switch>
  );
};

export default Routes;
