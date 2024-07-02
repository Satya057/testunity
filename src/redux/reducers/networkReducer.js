import { FETCH_REQUESTS, SELECT_REQUEST, FILTER_REQUESTS } from '../actions/requestActions';

const initialState = {
  requests: [],
  selectedRequest: null,
  filter: 'all',
};

const networkReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUESTS:
      return { ...state, requests: action.payload };
    case SELECT_REQUEST:
      return { ...state, selectedRequest: state.requests.find(r => r.id === action.payload) };
    case FILTER_REQUESTS:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default networkReducer;
