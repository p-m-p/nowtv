import React, { Component } from 'react';
import SectionHeader from 'components/section-header';
import Subscription from 'components/subscription';
import {} from './styles.less';

export default class Package extends Component {
  render() {
    return (
      <section className='package'>
        <SectionHeader heading='My package' total={this.props.total} />
        {this.props.subscriptions.map(subscription => {
          return <Subscription key={subscription.type} {...subscription} />
        })}
      </section>
    );
  }
}
