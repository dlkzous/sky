import { register } from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import Constants from '../constants/Constants';

const CHANGE_EVENT = 'change';
const data = {
  loadingCompleted: false
};

function addData(response) {
  data.loadingCompleted = true;
  data.serverData = response;
}

function setStatus(status) {
  data.loadingCompleted = status;
}

const AppStore = Object.assign(EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getLoadingStatus() {
    return data.loadingCompleted;
  },

  getAll() {
    return data.serverData;
  },

  getStatement() {
    return data.serverData.statement;
  },

  getTotal() {
    return data.serverData.total;
  },

  getPackage() {
    return data.serverData.package;
  },

  getCallCharges() {
    return data.serverData.callCharges;
  },

  getSkyStore() {
    return data.serverData.skyStore;
  },

  dispatcherIndex: register((action) => {
    switch (action.actionType) {
      case Constants.ADD_DATA:
        addData(action.data);
        break;
      case Constants.SET_STATUS:
        setStatus(action.status);
        break;
      default:
        break;
    }
    AppStore.emitChange();
  })
});

export default AppStore;
