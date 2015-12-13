import React from 'react';
import {createShallowRenderer} from 'helpers';
import Money from 'components/money';

describe('<Money />', () => {
  const render = createShallowRenderer(Money);

  it('displays GBP by default', () => {
    const output = render({amount: 12.5});
    expect(output.props.children).to.eql(['£', '12.50']);
  });

  it('displays USD', () => {
    const output = render({amount: 15.49, currency: 'USD'});
    expect(output.props.children).to.eql(['$', '15.49']);
  });

  it('displays EUR', () => {
    const output = render({amount: 4, currency: 'EUR'});
    expect(output.props.children).to.eql(['€', '4.00']);
  });
});
