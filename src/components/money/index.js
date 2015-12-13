import React, { Component } from 'react';

const currencies = {
  GBP: '£',
  USD: '$',
  EUR: '€'
};

export default class Money extends Component {
  static defaultProps = {
    currency: 'GBP'
  }

  render() {
    const symbol = currencies[this.props.currency];
    return <span className='money'>{symbol}{this.props.amount.toFixed(2)}</span>
  }
}
