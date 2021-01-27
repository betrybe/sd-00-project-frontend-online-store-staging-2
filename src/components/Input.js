import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
  render() {
    const { inputTestId, htmlFor, name, labelTestId } = this.props;
    return (
      <label htmlFor={ htmlFor } data-testid={ labelTestId }>
        <input data-testid={ inputTestId } name={ name } />
      </label>
    );
  }
}

export default List;

List.propTypes = {
  inputTestId: PropTypes.string.isRequired,
  labelTestId: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
