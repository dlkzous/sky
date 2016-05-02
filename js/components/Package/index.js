import React from 'react';
import Button from '../Button';
import DetailedView from '../DetailedView';
import connectToStore from '../../utils/ConnectToStore';
import Store from '../../stores/Store';

/**
 * @namespace Package
 */

/**
 * Function that sets gets the data required for the component to render
 * @function getState
 * @returns {Object} object containing the package charges
 * @memberOf Package
 */
function getState() {
  return Store.getPackage();
}

/**
 * Function that returns a stateless component
 * @function Package
 * @param {object} props - React component props
 * @author Kushal D'Souza
 * @memberOf Package
 */
const Package = (props) => {
  const { subscriptions, total } = props;
  return (
    <div className="statement col s12 m8 l10">
      <DetailedView data={subscriptions} />
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

Package.propTypes = {
  subscriptions: React.PropTypes.array.isRequired,
  total: React.PropTypes.number.isRequired
};

export default connectToStore(Package, getState);
