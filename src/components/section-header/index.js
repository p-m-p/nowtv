import React, { Component } from 'react';
import Money from 'components/money';
import {} from './style.less';

export default class SectionHeader extends Component {
  render() {
    return (
      <header className='section-header'>
        <h2 className='heading'>
          {this.props.heading}
          <Money amount={this.props.total}/>
        </h2>
      </header>
    );
  }
}
