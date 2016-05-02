// __tests__/Button-test.js

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Charges from '../js/components/Charges';
import ActionCreator from '../js/actions/ActionCreator';
import data from '../js/stores/data';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

describe('Charges', () => {
  it('displays the charges section with the correct total', () => {
    // Populate the stores
    ActionCreator.addData(data);
    const renderer = TestUtils.createRenderer();
    renderer.render(<Charges />);
    const actual = renderer.getRenderOutput();
    const expected = 'total={59.64}';
    expect(actual).toIncludeJSX(expected);
  });
  it('displays the charges section with the jsx for a row from the call charges', () => {
    // Populate the stores
    ActionCreator.addData(data);
    const renderer = TestUtils.createRenderer();
    renderer.render(<Charges />);
    const actual = renderer.getRenderOutput();
    const expected = '{called: \'07716393769\', cost: 2.13, duration: \'00:23:03\'}';
    expect(actual).toIncludeJSX(expected);
  });
});
