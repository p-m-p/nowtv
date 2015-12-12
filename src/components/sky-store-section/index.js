import React, { Component } from 'react';
import Money from 'components/money';
import {} from './styles.less';

export default class SkyStoreSection extends Component {
  render() {
    return (
      <div className='sky-store-section'>
        <h3 className='heading'>{this.props.heading}</h3>
        <ol>
        {this.props.items.map((item, index) => {
          return <li key={`item-${index}`} className='item'>
            <span className='title'>{item.title}</span>
            <span className='cost'><Money amount={item.cost}/></span>
          </li>
        })}
        </ol>
      </div>
    );
  }
}
