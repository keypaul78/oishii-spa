import React from 'react';
import Logo from './Logo';
import CartButton from './CartButton';
import Welcome from './Welcome';

const Header = () => {
  return (
    <div className="container pb-5 elevate-2">
      <div className="row">
        <div className="col-12">
          <div className="header d-flex">
            <div className="header__sx">
              <Logo />
            </div>
            <div className="header__cx d-flex justify-center">
              <div className="w-75 p-0">
                <Welcome mode="simple" />
              </div>
            </div>
            <div className="header__dx">
              <CartButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
