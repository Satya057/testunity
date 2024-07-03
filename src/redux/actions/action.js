// src/redux/actions.js

export const setSelectedRequest = (request) => ({
    type: 'SET_SELECTED_REQUEST',
    payload: request,
  });
  
  // Example action to add a request (for illustration purposes)
  export const addRequest = (request) => ({
    type: 'ADD_REQUEST',
    payload: request,
  });
  