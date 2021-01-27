import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </div>
    );
  }
}

export default Card;
