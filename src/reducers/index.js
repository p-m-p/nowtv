import assign from 'object-assign';
import * as actions from 'actions';
import {combineReducers} from 'redux';

const initialState = {
  isLoading: true,
  showAllCalls: false
};

export default function (state=initialState, action) {
  const { type } = action;

  switch (type) {
    case actions.TOGGLE_CALL_CHARGES:
      return assign({}, state, { showAllCalls: !state.showAllCalls });
    case actions.RECEIVE_BILL:
      return assign({}, action.json, { isLoading: false });
    default:
      return state;
  }
};
