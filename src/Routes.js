import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import RouteWithLayout from './components/RouteWithLayout/RouteWithLayout.component';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';
import Leave from './pages/Leave/Leave.conponent';
import Login from './pages/login/login.component';
import NotFound from './pages/NotFound/NotFound.component';
import Dashboard from './pages/Dashboard/Dashboard';
import Approve from './pages/Approve/Approve';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import CircularProgress from '@material-ui/core/CircularProgress';
const Routes = ({ currentUser }) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<CircularProgress />}>
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
            component={Leave}
            exact
            layout={MainLayout}
            path='/leave'
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
      </Suspense>
    </ErrorBoundary>
  );
};

export default Routes;
