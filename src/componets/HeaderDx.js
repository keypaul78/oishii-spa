//libs
import React from 'react';
//comps
import CartButton from './CartButton';
//styles
//data

class HeaderDx extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header__dx">
        <CartButton />
      </div>
    );
  }
}

export default HeaderDx;
