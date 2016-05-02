// __tests__/Button-test.js

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ConnectToStore from '../js/utils/ConnectToStore';
import ActionCreator from '../js/actions/ActionCreator';
import data from '../js/stores/data';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

describe('ConnectToStore', () => {
  it('verifies that the ConnectToStore higher order component generates the correct inner component for the given state', () => {
    // Populate the stores
    ActionCreator.addData(data);
    const renderer = TestUtils.createRenderer();
    const inner = (props) => {
      let { text } = props;
      return (
        <div>{text}</div>
      );
    };
    const getState = () => ({ text: 'Test' });
    const Component = ConnectToStore(inner, getState);
    renderer.render(<Component />);
    const actual = renderer.getRenderOutput();
    const expected = '<inner text="Test" />';
    expect(actual).toIncludeJSX(expected);
  });
});
