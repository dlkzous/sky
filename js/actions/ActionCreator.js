import Constants from '../constants/Constants';
import { dispatch } from '../dispatcher/AppDispatcher';

/**
 * @namespace ActionCreator
 */
const ActionCreator = {
  /**
   * Function that adds an item to the store
   * @function addItem
   * @author Kushal D'Souza
   * @param {string} item - item to be added to the store
   * @memberOf ActionCreator
   */
  addData(data) {
    dispatch({
      actionType: Constants.ADD_DATA, data
    });
  },

  /**
   * Function that sets the loading status within the store
   * @function setStatus
   * @author Kushal D'Souza
   * @param {bool} status - status to be set
   * @memberOf ActionCreator
   */
  setStatus(status) {
    dispatch({
      actionType: Constants.SET_STATUS, status
    });
  }
};

export default ActionCreator;
