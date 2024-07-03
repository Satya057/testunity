// src/redux/reducers/requestReducer.js

import { FETCH_REQUESTS_SUCCESS, SELECT_REQUEST, FETCH_REQUEST_DETAILS_SUCCESS, FILTER_REQUESTS } from '../actions/requestActions';

const initialState = {
  requests: [],
  selectedRequest: null,
  requestDetails: {},
  filter: 'all'
};

export const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUESTS_SUCCESS:
      return {
        ...state,
        requests: action.payload
      };
    case SELECT_REQUEST:
      return {
        ...state,
        selectedRequest: action.payload
      };
    case FETCH_REQUEST_DETAILS_SUCCESS:
      return {
        ...state,
        requestDetails: {
          ...state.requestDetails,
          [action.payload.id]: action.payload
        }
      };
    case FILTER_REQUESTS:
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
};
