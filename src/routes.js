import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard.js';
import Form from './component/Form/Form.js';


export default (
  <Switch>
    <Route component={ Dashboard } exact path="/" />
    <Route component={ Form } path='/add' />
    <Route component={ Form } path = '/edit/:id'/>
  </Switch>
)