import React from 'react';
import { Link } from 'react-router';
import connectToStore from '../utils/ConnectToStore';
import DataService from '../services/DataService';
import Store from '../stores/Store';

/**
 * Function that sets gets the data required for the component to render
 * @function getState
 * @returns {bool} boolean containing loading status
 * @memberOf Main
 */
function getState() {
  const loadingStatus = Store.getLoadingStatus();
  return { loadingCompleted: loadingStatus };
}

/**
 * React Component Class that handles the nav bar
 */
class Main extends React.Component {
  /**
   * Loads data before the component mounts
   * @function componentWillMount
   * @author Kushal D'Souza
   * @memberOf Main
   */
  componentWillMount() {
    DataService.getData();
  }
  /**
   * Function that renders the nav bar.
   * It displays the nested components only if the data has finished loading.
   * Displays a spinner while the data is loading
   * @function render
   * @author Kushal D'Souza
   * @memberOf Main
   */
  render() {
    const { loadingCompleted, children } = this.props;
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo center">Sky</a>
          </div>
        </nav>
        <div className="row">
          <div className="col s12 m4 l2">
            <ul className="collection with-header">
              <li className="collection-item">
                <Link to="/package" activeClassName="black-text">Package</Link>
              </li>
              <li className="collection-item">
                <Link to="/charges" activeClassName="black-text">Call Charges</Link>
              </li>
              <li className="collection-item">
                <Link to="/store" activeClassName="black-text">Sky Store</Link>
              </li>
            </ul>
          </div>
          {loadingCompleted ?
            children
            : (
            <div className="preloader-wrapper active">
              <div className="spinner-layer spinner-red-only">
                <div className="circle-clipper left">
                  <div className="circle"></div>
                </div><div className="gap-patch">
                  <div className="circle"></div>
                </div><div className="circle-clipper right">
                  <div className="circle"></div>
                </div>
              </div>
            </div>
            )
          }
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  loadingCompleted: React.PropTypes.bool.isRequired,
  children: React.PropTypes.object.isRequired
};

export default connectToStore(Main, getState);
