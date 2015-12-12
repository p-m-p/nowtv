import React from 'react';
import {createShallowRenderer} from 'helpers';
import Money from 'components/money';

describe('<Money />', () => {
  const render = createShallowRenderer(Money);

  it('displays GBP', () => {
    const output = render({amount: 12.5});
    expect(output.props.children).to.eql(['£', '12.50']);
  });
});
