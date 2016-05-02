// __tests__/Button-test.js

import ActionCreator from '../js/actions/ActionCreator';
import data from '../js/stores/data';
import Store from '../js/stores/Store';
import expect from 'expect';

describe('Store', () => {
  it('store must return statement', () => {
    // Populate the stores
    ActionCreator.addData(data);
    const actual = Store.getStatement();
    const expected = data.statement;
    expect(actual).toEqual(expected);
  });
  it('store must return total', () => {
    // Populate the stores
    ActionCreator.addData(data);
    const actual = Store.getTotal();
    const expected = 136.03;
    expect(actual).toEqual(expected);
  });
  it('store must return package', () => {
    // Populate the stores
    ActionCreator.addData(data);
    const actual = Store.getPackage();
    const expected = data.package;
    expect(actual).toEqual(expected);
  });
  it('store must return call charges', () => {
    // Populate the stores
    ActionCreator.addData(data);
    const actual = Store.getCallCharges();
    const expected = data.callCharges;
    expect(actual).toEqual(expected);
  });
  it('store must return sky store data', () => {
    // Populate the stores
    ActionCreator.addData(data);
    const actual = Store.getSkyStore();
    const expected = data.skyStore;
    expect(actual).toEqual(expected);
  });
});
