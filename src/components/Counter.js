import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class Counter extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
  };

  render() {
    const { increment, incrementIfOdd, decrement, counter } = this.props;
    return (
      <p>
        Clicked: {counter} times
        {' '}
        <Button bsStyle="primary" onClick={increment}>+</Button>
        {' '}
        <Button bsStyle="primary" onClick={decrement}>-</Button>
        {' '}
        <Button bsStyle="primary" onClick={incrementIfOdd}>Increment if odd</Button>
      </p>
    );
  }
}
