import React from 'react';
import Button from '../Button';
import connectToStore from '../../utils/ConnectToStore';
import Store from '../../stores/Store';

/**
 * @namespace Skystore
 */

/**
 * Function that sets gets the data required for the component to render
 * @function getState
 * @returns {Object} object containing the sky store data
 * @memberOf Skystore
 */
function getState() {
  return Store.getSkyStore();
}

/**
 * Function that returns a stateless component
 * @function Skystore
 * @param {object} props - React component props
 * @author Kushal D'Souza
 * @memberOf Skystore
 */
const Skystore = (props) => {
  const { total, children } = props;
  return (
    <div className="statement col s12 m8 l10">
      <div className="row">
        <Button text="View rentals" to="store/rentals" />
        <Button text="View Buy and Keep" to="store/buyandkeep" />
        <Button text="Back" />
      </div>
      <div className="row">
        {children}
      </div>
      <div className="row">
        <div className="col s2 m2 l2">
          <b>Sky Store Total:</b>
        </div>
        <div className="col s2 m2 l2">
          {total}
        </div>
      </div>
    </div>
  );
};

Skystore.propTypes = {
  children: React.PropTypes.object.isRequired,
  total: React.PropTypes.number.isRequired
};

export default connectToStore(Skystore, getState);
