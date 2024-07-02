import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RequestList from './RequestList';
import RequestDetails from './RequestDetails';
import Filter from './Filter';
import { fetchRequests } from '../redux/actions/requestActions';
import '../App.css';

const NetworkPanel = () => {
  const dispatch = useDispatch();
  const { requests, selectedRequest, filter } = useSelector(state => state.network);

  useEffect(() => {
    dispatch(fetchRequests());
  }, [dispatch]);

  const filteredRequests = requests.filter(request => 
    filter === 'all' || request.category === filter
  );

  return (
    <div className="network-panel">
      <Filter />
      <RequestList requests={filteredRequests} />
      {selectedRequest && <RequestDetails request={selectedRequest} />}
    </div>
  );
};

export default NetworkPanel;
