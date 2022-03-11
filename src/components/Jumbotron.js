//libs
import React from 'react';
//compo
import Logo from './Logo';
import CartButton from './CartButton';
import Welcome from './Welcome';
import Categories from './Categories';
//data
import fields from '../data/content.json';

const Jumbotron = () => {
  return (
    <div className="container pb-5 elevate-2 jumbotron">
      <div className="row">
        <div className="col-12">
          <div className="header d-flex">
            <div className="header__sx">
              <Logo />
              <h3>
                {fields.welcome.Messagge} <span>{fields.welcome.table}</span>
              </h3>
            </div>
            <div className="header__cx">
              <Welcome mode="simple" />
            </div>
            <div className="header__dx">
              <CartButton />
            </div>
          </div>
        </div>
      </div>

      <Categories mode="chips" />

      <div className="row welcome--message">
        <div className="col-6">
          <Welcome mode="large" />
        </div>
      </div>

      <div className="bg bg--welcome">
        <img
          src={fields.welcome.backgroundImage}
          alt={fields.restaurant.name}
        />
      </div>
    </div>
  );
};

export default Jumbotron;
