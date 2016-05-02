import React from 'react';
import connectToStore from '../../../utils/ConnectToStore';
import Store from '../../../stores/Store';
import DetailedView from '../../DetailedView';

/**
 * @namespace BuyAndKeep
 */

/**
 * Function that sets gets the data required for the component to render
 * @function getState
 * @returns {Object} object containing the sky store data
 * @memberOf BuyAndKeep
 */
function getState() {
  return Store.getSkyStore();
}

/**
 * Function that returns a stateless component
 * @function BuyAndKeep
 * @param {object} props - React component props
 * @author Kushal D'Souza
 * @memberOf BuyAndKeep
 */
const BuyAndKeep = (props) => {
  const { buyAndKeep } = props;
  return (
    <div className="statement col s12 m8 l10">
      <div className="row">
        <div className="col s12 m8 l10">
          <b>Your Buy and Keep</b>
        </div>
      </div>
      <DetailedView data={buyAndKeep} />
    </div>
  );
};

BuyAndKeep.propTypes = {
  buyAndKeep: React.PropTypes.array.isRequired
};

export default connectToStore(BuyAndKeep, getState);
