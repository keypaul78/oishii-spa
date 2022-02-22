//libs
import React from 'react';
//comps
//styles
//data
import fields from '../data/content.json';

class CartButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <a href="/cart" className="button button--cart">
        {fields.cart.buttonLabel}
        <div className="button--cart__amount">
          <span>0</span>
        </div>
      </a>
    );
  }
}

export default CartButton;
