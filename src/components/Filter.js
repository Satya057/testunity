// src/components/Filter.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { filterRequests } from '../redux/actions/requestActions';
import '../App.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(filterRequests(e.target.value));
  };

  return (
    <div className="filter">
      <select onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>
    </div>
  );
};

export default Filter;
