import React, { Component } from 'react';
import SectionHeader from 'components/section-header';
import CallCharge from 'components/call-charge';
import {} from './style.less';

export default class CallCharges extends Component {
  render() {
    return (
      <section className='call-charges'>
        <SectionHeader heading='My call charges' total={this.props.total} />
        <div className='breakdown'>
          <ol className='call-list'>
            {this.calls().map((charge, index) => {
              return <li key={`call-charge-${index}`}>
                <CallCharge {...charge}/>
              </li>;
            })}
          </ol>
          <button className='toggle' type='button' role='button' onClick={this.props.onClick}>
            {this.props.showAll ? 'Hide' : 'Show'} all call charges
          </button>
        </div>
      </section>
    );
  }

  calls() {
    return this.props.showAll ? this.props.calls : this.props.calls.slice(0, 5);
  }
}
