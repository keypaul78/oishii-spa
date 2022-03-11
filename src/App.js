//global styles
import './scss/index.scss';
//libs
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
//compo
import Jumbotron from './components/Jumbotron';
import Categories from './components/Categories';
import MealsList from './components/MealsList';
import IngredientsList from './components/IngredientsList';
import CartSummary from './components/CartSummary';

const App = () => {
  const location = useLocation();
  const [mainClass, setMainClass] = useState('home');

  //set state to change class of main elm
  useEffect(() => {
    const pathClass = location.pathname.split('/');
    switch (pathClass[1]) {
      case 'cart':
        setMainClass('cart');
        break;
      case 'category':
        setMainClass('category');
        break;
      case 'search':
        setMainClass('search');
        break;
      default:
        setMainClass('home');
    }
  }, [location.pathname]);

  return (
    <main className={mainClass}>
      <Jumbotron />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Categories />
                </>
              }
            />
            <Route
              path="/category/:categoryName"
              element={
                <>
                  <MealsList />
                </>
              }
            />
            <Route
              path="/search"
              element={
                <>
                  <IngredientsList />
                </>
              }
            />
            <Route path="/cart" element={<CartSummary />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </main>
  );
};

export default App;
