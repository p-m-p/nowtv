import React, { Component } from 'react';

export default class Money extends Component {
  render() {
    return <span className='money'>&pound;{this.props.amount.toFixed(2)}</span>
  }
}
