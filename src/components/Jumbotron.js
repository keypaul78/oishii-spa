//libs
import React from 'react';
//compo
import Logo from './Logo';
import CartButton from './CartButton';
import Image from './Image';
import Welcome from './Welcome';
//data
import fields from '../data/content.json';

const Jumbotron = () => {
  return (
    <div className="container pb-5 elevate-2">
      <div className="row">
        <div className="col-12">
          <div className="header d-flex">
            <div className="header__sx">
              <Logo />
              <h3>
                {fields.welcome.Messagge} <span>{fields.welcome.table}</span>
              </h3>
            </div>
            <div className="header__cx"></div>
            <div className="header__dx">
              <CartButton />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <Welcome />
        </div>
      </div>

      <div className="bg bg--welcome">
        <Image
          src={fields.welcome.backgroundImage}
          alt={fields.restaurant.name}
        />
      </div>
    </div>
  );
};

export default Jumbotron;
