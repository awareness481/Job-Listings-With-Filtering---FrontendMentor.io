import { combineReducers } from 'redux';
import {
  REQUEST_JOB_LISTINGS,
  RECEIVE_JOB_LISTINGS
} from '../actions/index';

function data(state = [], action) {
  switch(action.type) {
    case REQUEST_JOB_LISTINGS:
      return {
        ...state
      }
    case RECEIVE_JOB_LISTINGS:
      return {
        ...state,
        ...action.jobs
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  listings: data
});
export default rootReducer;

