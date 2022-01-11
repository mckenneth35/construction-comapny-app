import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import MainPage from '../containers/MainPage';

const Routes = () => (
  <Switch>
    <Route path='/error' component={() => <div>500</div>} />
    <AppRoutes />
  </Switch>
);

// eslint-disable-next-line no-unused-vars,react/prop-types
const AppRoutes = () => (
  <>
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route component={() => <div>404</div>} />
    </Switch>
  </>
);

export default Routes;
