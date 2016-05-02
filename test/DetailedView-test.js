// __tests__/Button-test.js

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import DetailedView from '../js/components/DetailedView';
import data from '../js/stores/data';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

describe('DetailedView', () => {
  it('displays the table from the passed in array of data', () => {
    // Populate the stores
    const renderer = TestUtils.createRenderer();
    renderer.render(<DetailedView data={data.skyStore.rentals} />);
    const actual = renderer.getRenderOutput();
    const expected = '<table className="striped"> <thead> <tr> <th data-field="{keyString}"> Title </th> <th data-field="{keyString}"> Cost </th> </tr> </thead> <tbody> <tr> <td> 50 Shades of Grey </td> <td> 4.99 </td> </tr> </tbody> </table>';
    expect(actual).toIncludeJSX(expected);
  });
});
