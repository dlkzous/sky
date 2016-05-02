// __tests__/Button-test.js

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import BuyAndKeep from '../js/components/Skystore/BuyAndKeep';
import ActionCreator from '../js/actions/ActionCreator';
import data from '../js/stores/data';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

describe('BuyAndKeep', () => {
  it('displays the detailed view items', () => {
    // Populate the stores
    ActionCreator.addData(data);
    const renderer = TestUtils.createRenderer();
    renderer.render(<BuyAndKeep />);
    const actual = renderer.getRenderOutput();
    const expected = '[{cost: 9.99, title: \'That\\\'s what she said\'}';
    expect(actual).toIncludeJSX(expected);
  });
});
