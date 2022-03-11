//libs
import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link to={'/cart'} className="button button--cart">
        <strong>{fields.cart.buttonLabel}</strong>
        <div className="button--cart__amount">
          <span>0</span>
        </div>
      </Link>
    );
  }
}

export default CartButton;
