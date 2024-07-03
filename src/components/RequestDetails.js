// src/components/RequestDetails.js
import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';

const RequestDetails = () => {
  const { selectedRequest, requestDetails } = useSelector(state => state.network);

  if (!selectedRequest || !requestDetails[selectedRequest]) {
    return <div className="request-details">Select a request to see details</div>;
  }

  const details = requestDetails[selectedRequest];

  return (
    <div className="request-details">
      <h2>Request Details</h2>
      <p><strong>Title:</strong> {details.title}</p>
      <p><strong>Price:</strong> ${details.price}</p>
      <p><strong>Description:</strong> {details.description}</p>
      <p><strong>Category:</strong> {details.category}</p>
      <p><strong>Image:</strong> <img src={details.image} alt={details.title} /></p>
      {/* Add additional details here */}
    </div>
  );
};

export default RequestDetails;
