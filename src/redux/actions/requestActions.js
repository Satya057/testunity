import axios from 'axios';

export const FETCH_REQUESTS = 'FETCH_REQUESTS';
export const SELECT_REQUEST = 'SELECT_REQUEST';
export const FILTER_REQUESTS = 'FILTER_REQUESTS';

export const fetchRequests = () => async dispatch => {
  const response = await axios.get('https://fakestoreapi.com/products?limit=10');
  const requests = response.data.map(item => ({
    ...item,
    type: item.category
  }));
  dispatch({ type: FETCH_REQUESTS, payload: requests });
};

export const selectRequest = (requestId) => {
  return { type: SELECT_REQUEST, payload: requestId };
};

export const filterRequests = (filter) => {
  return { type: FILTER_REQUESTS, payload: filter };
};
