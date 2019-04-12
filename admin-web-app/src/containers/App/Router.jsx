import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../Layout/index';
import MainWrapper from './MainWrapper';

import LogIn from '../LogIn/index';
import ExamplePageOne from '../Example/index';
import ExamplePageTwo from '../ExampleTwo/index';
// import ExamplePageThree from '../ExampleThree/index';
import CoinsPage from '../CoinsPage/index';
import CoinsCreate from '../CoinsPage/createCoins';

const Pages = () => (
  <Switch>
    <Route path="/pages/one" component={ExamplePageOne} />
    <Route path="/pages/two" component={ExamplePageTwo} />
    <Route path="/pages/coins" component={CoinsCreate} />
  </Switch>
);

const Coins = () => (
  <Switch>
    <Route path="/coins/home" component={CoinsPage} />
    <Route path="/coins/createcoin" component={CoinsCreate} />
  </Switch>
);

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/pages" component={Pages} />
      <Route path="/coins" component={Coins} />
    </div>
  </div>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/log_in" component={LogIn} />
        <Route path="/" component={wrappedRoutes} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
