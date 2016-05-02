// __tests__/Button-test.js

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Statement from '../js/components/Statement';
import ActionCreator from '../js/actions/ActionCreator';
import data from '../js/stores/data';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

describe('Statement', () => {
  it('displays the Statement section with the correct total', () => {
    // Populate the stores
    ActionCreator.addData(data);
    const renderer = TestUtils.createRenderer();
    renderer.render(<Statement />);
    const actual = renderer.getRenderOutput();
    const expected = 'total={136.03}';
    expect(actual).toIncludeJSX(expected);
  });

  it('displays the Statement overview details', () => {
    // Populate the stores
    ActionCreator.addData(data);
    const renderer = TestUtils.createRenderer();
    renderer.render(<Statement />);
    const actual = renderer.getRenderOutput();
    const expected = 'statement={{due: \'2015-01-25\', generated: \'2015-01-11\'';
    expect(actual).toIncludeJSX(expected);
  });
});
