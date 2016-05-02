import React from 'react';
import connectToStore from '../../utils/ConnectToStore';
import Store from '../../stores/Store';

/**
 * @namespace Statement
 */

/**
 * Function that sets gets the data required for the component to render
 * @function getState
 * @returns {Object} object containing the statement data
 * @memberOf Statement
 */
function getState() {
  const statement = Store.getStatement();
  const total = Store.getTotal();
  return { statement, total };
}

/**
 * Function that returns a stateless component
 * @function Statement
 * @param {object} props - React component props
 * @author Kushal D'Souza
 * @memberOf Statement
 */
const Statement = (props) => {
  const { total, statement } = props;
  const { generated, due, period } = statement;
  const { from, to } = period;
  return (
    <div className="statement col s12 m8 l10">
      <div className="row statement">
        <div className="row">
          <div className="col s5 m5 l5">
            <h5>Your statement summary</h5>
          </div>
        </div>
        <div className="row">
          <div className="col s2 m2 l2">
            <b>Generated:</b>
          </div>
          <div className="col s2 m2 l2">
            {generated}
          </div>
        </div>
        <div className="row">
          <div className="col s2 m2 l2">
            <b>Due:</b>
          </div>
          <div className="col s2 m2 l2">
            {due}
          </div>
        </div>
        <div className="row">
          <div className="col s2 m2 l2">
            <b>From:</b>
          </div>
          <div className="col s2 m2 l2">
            {from}
          </div>
        </div>
        <div className="row">
          <div className="col s2 m2 l2">
            <b>To:</b>
          </div>
          <div className="col s2 m2 l2">
            {to}
          </div>
        </div>
        <div className="row">
          <div className="col s2 m2 l2">
            <b>Total:</b>
          </div>
          <div className="col s2 m2 l2">
            {total}
          </div>
        </div>
        <div className="row">
          <div className="col s12 m12 l12">
            <p>
              For a more detailed breakdown of the charges,
              click on the individual items on the left panel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Statement.propTypes = {
  statement: React.PropTypes.object.isRequired,
  total: React.PropTypes.number.isRequired
};

export default connectToStore(Statement, getState);
