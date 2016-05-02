// __tests__/Button-test.js

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Rentals from '../js/components/Skystore/Rentals';
import ActionCreator from '../js/actions/ActionCreator';
import data from '../js/stores/data';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

describe('Rentals', () => {
  it('displays the detailed view items', () => {
    // Populate the stores
    ActionCreator.addData(data);
    const renderer = TestUtils.createRenderer();
    renderer.render(<Rentals />);
    const actual = renderer.getRenderOutput();
    const expected = '{cost: 4.99, title: \'50 Shades of Grey\'}';
    expect(actual).toIncludeJSX(expected);
  });
});
