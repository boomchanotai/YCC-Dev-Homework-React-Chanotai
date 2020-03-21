import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Page, {MacbookPage, SurfacePage, SwiftPage, XPSPage, ZenBookPage, PurchasePage} from './Page';
import Product from './Product';
import Purchase from './Purchase';
import Footer from './Footer';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/Macbook" component={MacbookPage} />
      <Route path="/Surface" component={SurfacePage} />
      <Route path="/Swift" component={SwiftPage} />
      <Route path="/XPS" component={XPSPage} />
      <Route path="/ZenBook" component={ZenBookPage} />
      <Route path="/Purchase" component={PurchasePage} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
