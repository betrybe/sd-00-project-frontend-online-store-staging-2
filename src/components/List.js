import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
  render() {
    const { items, dataTestId } = this.props;
    return (
      <ul>
        { items.map((item) => (
          <li data-testid={ dataTestId } key={ item.id }>{ item.name }</li>
        )) }
      </ul>
    );
  }
}

export default List;

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  dataTestId: PropTypes.string.isRequired,
};
