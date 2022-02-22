//global styles
import './scss/index.scss';
//libs
import React from 'react';
//compo
import Jumbotron from './components/Jumbotron';
import Header from './components/Header';
import Categories from './components/Categories';
import DishesList from './components/DishesList';
import CartSummary from './components/CartSummary';

import Route from './components/Route';

const App = () => {
  return (
    <main>
      <Route path="/">
        <Jumbotron />
        <Categories />
      </Route>
      <Route path="/list">
        <Header />
        <DishesList />
      </Route>
      <Route path="/cart">
        <CartSummary />
      </Route>
    </main>
  );
};

export default App;
