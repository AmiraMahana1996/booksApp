import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Books from '../pages/Books/Books';

export default function Routes() {
  return (
    <Switch>
      <Route path="/books" exact component={Books} />
    </Switch>
  );
}
