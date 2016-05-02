import React from 'react';
import connectToStore from '../../../utils/ConnectToStore';
import Store from '../../../stores/Store';
import DetailedView from '../../DetailedView';

/**
 * @namespace Rentals
 */

/**
 * Function that sets gets the data required for the component to render
 * @function getState
 * @returns {Object} object containing the sky store data
 * @memberOf Rentals
 */
function getState() {
  return Store.getSkyStore();
}

/**
 * Function that returns a stateless component
 * @function Rentals
 * @param {object} props - React component props
 * @author Kushal D'Souza
 * @memberOf Rentals
 */
const Rentals = (props) => {
  const { rentals } = props;
  return (
    <div className="statement col s12 m8 l10">
      <div className="row">
        <div className="col s12 m8 l10">
          <b>Your Rentals</b>
        </div>
      </div>
      <DetailedView data={rentals} />
    </div>
  );
};

Rentals.propTypes = {
  rentals: React.PropTypes.array.isRequired
};

export default connectToStore(Rentals, getState);
