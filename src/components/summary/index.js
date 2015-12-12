import React, { Component } from 'react';
import Money from 'components/money';
import {} from './style.less';

export default class Summary extends Component {
  render() {
    return (
      <header className='summary'>
        <div className='title'>
          <h1 className='heading'>My Bill <Money amount={this.props.total}/></h1>
          <p className='period'>For the period: {this.props.period.from} - {this.props.period.to}</p>
        </div>

        <div className='dates'>
          <p className='date'><b>Payment due by:</b> {this.props.due}</p>
          <p className='date'><b>Bill generated on:</b> {this.props.generated}</p>
        </div>
      </header>
    );
  }
}
