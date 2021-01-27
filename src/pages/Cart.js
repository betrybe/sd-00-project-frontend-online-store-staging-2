import React, { Component } from 'react';

class Cart extends Component {
  render() {
    return (
      <div>
        <div data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      </div>
    );
  }
}

export default Cart;
