import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartIcon extends Component {
  render() {
    return (
      <Link data-testid="shopping-cart-button" to="/carrinho">
        Carrinho
      </Link>
    );
  }
}

export default CartIcon;
