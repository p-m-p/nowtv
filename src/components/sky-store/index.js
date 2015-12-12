import React, { Component } from 'react';
import SectionHeader from 'components/section-header';
import SkyStoreSection from 'components/sky-store-section';

export default class SkyStore extends Component {
  render() {
    return (
      <section>
        <SectionHeader heading='My Sky store' total={this.props.total} />
        <SkyStoreSection items={this.props.rentals} heading='Rentals' />
        <SkyStoreSection items={this.props.buyAndKeep} heading='Buy and keep' />
      </section>
    );
  }
}
