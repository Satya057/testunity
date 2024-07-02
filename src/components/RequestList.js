import React from 'react';
import { useDispatch } from 'react-redux';
import { selectRequest } from '../redux/actions/requestActions';
import '../App.css';
const RequestList = ({ requests }) => {
  const dispatch = useDispatch();

  return (
    <div className="request-list">
      {requests.map(request => (
        <div
          key={request.id}
          onClick={() => dispatch(selectRequest(request.id))}
        >
          {request.title}
        </div>
      ))}
    </div>
  );
};

export default RequestList;
