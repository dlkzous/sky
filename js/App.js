// NPM modules
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';

// Components
import Main from './components';
import Statement from './components/Statement';
import Package from './components/Package';
import Charges from './components/Charges';
import Skystore from './components/Skystore';
import Rentals from './components/Skystore/Rentals';
import BuyAndKeep from './components/Skystore/BuyAndKeep';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Statement} />
      <Route path="package" component={Package} />
      <Route path="charges" component={Charges} />
      <Route path="store" component={Skystore} >
        <Route path="rentals" component={Rentals} />
        <Route path="buyandkeep" component={BuyAndKeep} />
      </Route>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('app'));
