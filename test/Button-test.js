// __tests__/Button-test.js

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Button from '../js/components/Button';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

describe('Button', () => {
  it('renders a button with text of Test', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Button text="Test" />);
    const actual = renderer.getRenderOutput();
    const expected = 'Test';
    expect(actual).toIncludeJSX(expected);
  });
});
