import axios from 'axios';
import Actions from '../actions/ActionCreator';

/**
 * Class that handles loading of data
 */
class DataService {
  /**
   * Sets the urls that the service will use
   * @function constructor
   * @author Kushal D'Souza
   * @memberOf DataService
   */
  constructor() {
    this.URLS = {
      FETCH: 'https://still-scrubland-9880.herokuapp.com/bill.json'
    };
  }

  /**
   * Function that loads the data and calls an action on the action creator on load of the data.
   * @function getData
   * @author Kushal D'Souza
   * @memberOf DataService
   */
  getData() {
    axios.get(this.URLS.FETCH)
      .then((response) => {
        Actions.addData(response.data);
      })
      .catch((response) => {
        console.log(response);
      });
  }
}

const dataService = new DataService();

export default dataService;
