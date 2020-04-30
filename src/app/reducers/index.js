import { combineReducers } from "redux";
import {
  REQUEST_JOB_LISTINGS,
  RECEIVE_JOB_LISTINGS,
  SET_FILTERS,
  FILTER_JOBS,
} from "../actions/index";

function listings(state = [], action) {
  switch (action.type) {
    case REQUEST_JOB_LISTINGS:
      return [...state];
    case RECEIVE_JOB_LISTINGS:
      return [...state, ...action.jobs];
    default:
      return state;
  }
}

function form(state = { filters: [] }, action) {
  switch (action.type) {
    case SET_FILTERS:
      const newState = [...state.filters];

      if (newState.indexOf(action.filter) !== -1) {
        const index = newState.indexOf(action.filter);
        newState.splice(index, 1);
      } else {
        newState.push(action.filter);
      }

      return {
        ...state,
        filters: newState,
      };
    case FILTER_JOBS:
      let list = [...action.jobs];

      list = list.filter((listing) => {
        let pre = false;
        if (listing.languages) {
          listing.languages.map((lang) => {
            if (state.filters.includes(lang)) {
              pre = true;
            }
          });
        }

        return pre;
      });

      return {
        ...state,
        filteredListings: list,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  listings,
  form,
});
export default rootReducer;
