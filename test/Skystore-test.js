// __tests__/Button-test.js

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Skystore from '../js/components/Skystore';
import ActionCreator from '../js/actions/ActionCreator';
import data from '../js/stores/data';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

describe('Skystore', () => {
  it('displays the skystore section with the correct total', () => {
    // Populate the stores
    ActionCreator.addData(data);
    const renderer = TestUtils.createRenderer();
    renderer.render(<Skystore />);
    const actual = renderer.getRenderOutput();
    const expected = 'total={24.97}';
    expect(actual).toIncludeJSX(expected);
  });

  it('displays the skystore buttons to view more details', () => {
    // Populate the stores
    ActionCreator.addData(data);
    const renderer = TestUtils.createRenderer();
    renderer.render(<Skystore />);
    const actual = renderer.getRenderOutput();
    const expected = 'buyAndKeep={[{cost: 9.99, title: \'That\\\'s what she said\'}, {cost: 9.99, title: \'Brokeback mountain\'}]} rentals={[{cost: 4.99, title: \'50 Shades of Grey\'}]} total={24.97}';
    expect(actual).toIncludeJSX(expected);
  });
});
