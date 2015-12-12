import React, { Component } from 'react';
import Money from 'components/money';
import {} from './style.less';

export default class Subscription extends Component {
  render() {
    return (
      <p className='subscription'>
        <span className='name'>{this.props.name}</span>
        <span className='cost'><Money amount={this.props.cost}/></span>
      </p>
    );
  }
}
