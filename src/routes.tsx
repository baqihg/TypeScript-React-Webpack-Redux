import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import Hello from './containers/Hello';

export default (
  <Route path="/">
    <IndexRoute component={Hello} />
    <Route path="/demo">
      <IndexRoute component={Hello} />
    </Route>
  </Route>
);