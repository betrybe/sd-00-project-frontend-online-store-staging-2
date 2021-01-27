import React, { Component } from 'react';

class List extends Component {
  render() {
    const { items, dataTestId } = this.props;
    return (
      <ul>
        { items.map((item) => <li data-testid={ dataTestId } key={ item }>{ item.name }</li>) }
      </ul>
    );
  }
}

export default List;
