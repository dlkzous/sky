import React from 'react';
import Button from '../Button';
import DetailedView from '../DetailedView';
import connectToStore from '../../utils/ConnectToStore';
import Store from '../../stores/Store';

/**
 * @namespace Charges
 */

/**
 * Function that sets gets the data required for the component to render
 * @function getState
 * @returns {Object} object containing the call charges
 * @memberOf Charges
 */
function getState() {
  return Store.getCallCharges();
}

/**
 * Function that returns a stateless component
 * @function Charges
 * @param {object} props - React component props
 * @author Kushal D'Souza
 * @memberOf Charges
 */
const Charges = (props) => {
  const { calls, total } = props;
  return (
    <div className="statement col s12 m8 l10">
      <DetailedView data={calls} />
      <div className="row">
        <div className="col s2 m2 l2">
          <b>Total:</b>
        </div>
        <div className="col s2 m2 l2">
          {total}
        </div>
      </div>
      <div className="row">
        <div className="col s2 m2 l2">
          <Button text="Back" />
        </div>
      </div>
    </div>
  );
};

Charges.propTypes = {
  calls: React.PropTypes.array.isRequired,
  total: React.PropTypes.number.isRequired
};

export default connectToStore(Charges, getState);
