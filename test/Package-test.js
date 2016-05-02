// __tests__/Button-test.js

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Package from '../js/components/Package';
import ActionCreator from '../js/actions/ActionCreator';
import data from '../js/stores/data';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

describe('Package', () => {
  it('displays the package section with the correct total', () => {
    // Populate the stores
    ActionCreator.addData(data);
    const renderer = TestUtils.createRenderer();
    renderer.render(<Package />);
    const actual = renderer.getRenderOutput();
    const expected = 'total={71.4}';
    expect(actual).toIncludeJSX(expected);
  });
  it('displays the package section with the jsx for a row from packages', () => {
    // Populate the stores
    ActionCreator.addData(data);
    const renderer = TestUtils.createRenderer();
    renderer.render(<Package />);
    const actual = renderer.getRenderOutput();
    const expected = '{cost: 50, name: \'Variety with Movies HD\', type: \'tv\'}';
    expect(actual).toIncludeJSX(expected);
  });
});
