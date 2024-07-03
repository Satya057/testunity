// src/redux/actions/requestActions.js

import axios from 'axios';

export const FETCH_REQUESTS_SUCCESS = 'FETCH_REQUESTS_SUCCESS';
export const SELECT_REQUEST = 'SELECT_REQUEST';
export const FETCH_REQUEST_DETAILS_SUCCESS = 'FETCH_REQUEST_DETAILS_SUCCESS';
export const FILTER_REQUESTS = 'FILTER_REQUESTS';

export const fetchRequests = () => async dispatch => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products?limit=10');
    console.log('Fetched Requests:', response.data); // Log fetched data
    dispatch({ type: FETCH_REQUESTS_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error fetching requests:', error);
  }
};

export const selectRequest = id => async dispatch => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log('Fetched Request Details:', response.data); // Log request details
    dispatch({ type: FETCH_REQUEST_DETAILS_SUCCESS, payload: response.data });
    dispatch({ type: SELECT_REQUEST, payload: id });
  } catch (error) {
    console.error('Error fetching request details:', error);
  }
};

export const filterRequests = filter => ({
  type: FILTER_REQUESTS,
  payload: filter
});
