import React, { Component } from 'react';
import Money from 'components/money';
import {} from './style.less';

export default class CallCharge extends Component {
  render() {
    return (
      <div className='call-charge'>
        <span className='number'>{this.props.called}</span>
        <span className='duration'>{this.props.duration}</span>
        <span className='cost'><Money amount={this.props.cost}/></span>
      </div>
    );
  }
}
