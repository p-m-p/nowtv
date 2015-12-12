import React from 'react';
import {Simulate} from 'react-addons-test-utils';
import {scryType, find, findType, createRenderer} from 'helpers';
import {calls} from 'fixtures';
import CallCharges from 'components/call-charges';
import SectionHeader from 'components/section-header';
import CallCharge from 'components/call-charge';

describe('<CallCharges />', () => {
  const render = createRenderer(CallCharges, {
    total: 12.5,
    showAll: false,
    calls
  });

  it('renders section header', () => {
    const header = findType(render(), SectionHeader);
    expect(header.props.total).to.equal(12.5);
    expect(header.props.heading).to.equal('My call charges');
  });

  describe('when showAll is false', () => {
    it('renders five most recent call charges', () => {
      const callCharges = scryType(render(), CallCharge);
      expect(callCharges).to.have.length(5);
    });
  });

  describe('when showAll is true', () => {
    it('renders all calls charges', () => {
      const callCharges = scryType(render({showAll: true}), CallCharge);
      expect(callCharges).to.have.length(calls.length);
    });
  });

  describe('when toggle all calls button is clicked', () => {
    it('invokes onClick callback', () => {
      const onClick = sinon.spy();
      const button = find(render({onClick}), 'button');
      Simulate.click(button);
      expect(onClick.calledOnce).to.be.true;
    });
  });
});
