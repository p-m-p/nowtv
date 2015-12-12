import React from 'react';
import TestUtils, {Simulate} from 'react-addons-test-utils';
import assign from 'object-assign';

export function find(tree, tag) {
  return TestUtils.findRenderedDOMComponentWithTag(tree, tag);
}

export function findType(tree, Type) {
  return TestUtils.findRenderedComponentWithType(tree, Type);
}

export function scryType(tree, Type) {
  return TestUtils.scryRenderedComponentsWithType(tree, Type);
}

export function createRenderer(Component, defaultProps) {
  return props => TestUtils.renderIntoDocument(
    <Component {...assign({}, defaultProps, props)}/>
  );
}

export function createShallowRenderer(Component, defaultProps) {
  return props => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Component {...assign({}, defaultProps, props)}/>);
    return renderer.getRenderOutput();
  };
}
