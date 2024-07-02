import React from 'react';
import '../App.css';
const RequestDetails = ({ request }) => {
  return (
    <div className="request-details">
      <h2>Request Details</h2>
      <p><strong>Title:</strong> {request.title}</p>
      <p><strong>Price:</strong> ${request.price}</p>
      <p><strong>Description:</strong> {request.description}</p>
      <p><strong>Category:</strong> {request.category}</p>
      <p><strong>Image:</strong> <img src={request.image} alt={request.title} width="100" /></p>
    </div>
  );
};

export default RequestDetails;
